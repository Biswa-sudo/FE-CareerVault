<?php

declare(strict_types=1);

require __DIR__ . '/config.php';

const SUBSCRIPTION_AMOUNT_PAISE = 10000; // ₹100/year
const SUBSCRIPTION_CURRENCY = 'INR';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$action = $_GET['action'] ?? '';
$action = $action === 'create-order' ? 'create-order' : ($action === 'verify-payment' ? 'verify-payment' : $action);

function razorpayCredentials(): array {
    $keyId = envValue('RAZORPAY_KEY_ID', '');
    $keySecret = envValue('RAZORPAY_KEY_SECRET', '');
    return [
        'keyId' => $keyId,
        'keySecret' => $keySecret,
        'configured' => $keyId !== '' && $keySecret !== '',
    ];
}

function razorpayRequest(string $path, array $payload, string $keyId, string $keySecret): array {
    $ch = curl_init('https://api.razorpay.com/v1/' . ltrim($path, '/'));
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        CURLOPT_USERPWD => $keyId . ':' . $keySecret,
        CURLOPT_POSTFIELDS => json_encode($payload),
        CURLOPT_TIMEOUT => 30,
    ]);

    $responseBody = curl_exec($ch);
    $statusCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($responseBody === false) {
        respond(['error' => 'Payment gateway request failed: ' . $curlError], 502);
    }

    $decoded = json_decode($responseBody, true);
    if (!is_array($decoded)) {
        respond(['error' => 'Invalid payment gateway response.'], 502);
    }

    if ($statusCode < 200 || $statusCode >= 300) {
        $message = (string) ($decoded['error']['description'] ?? $decoded['error'] ?? 'Payment gateway error.');
        respond(['error' => $message], 502);
    }

    return $decoded;
}

function activateSubscription(PDO $pdo, int $userId): array {
    $paymentDate = date('c');
    $sql = 'INSERT INTO subscriptions (user_id, status, payment_date)
            VALUES (:user_id, :status, :payment_date)
            ON DUPLICATE KEY UPDATE status = VALUES(status), payment_date = VALUES(payment_date), updated_at = CURRENT_TIMESTAMP';
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        'user_id' => $userId,
        'status' => 'active',
        'payment_date' => $paymentDate,
    ]);
    return ['status' => 'active', 'paymentDate' => $paymentDate];
}

// ---------- CONFIG ENDPOINT ----------
if ($method === 'GET' && $action === 'config') {
    $credentials = razorpayCredentials();
    respond([
        'configured' => $credentials['configured'],
        'amount' => SUBSCRIPTION_AMOUNT_PAISE,
        'amountDisplay' => SUBSCRIPTION_AMOUNT_PAISE / 100,
        'currency' => SUBSCRIPTION_CURRENCY,
        'keyId' => $credentials['configured'] ? $credentials['keyId'] : null,
    ]);
}

// ---------- CREATE ORDER ----------
if ($method === 'POST' && ($action === 'create-order' || $action === 'create_order')) {
    try {
        $pdo = db();
        $userId = requireAuth();
        $credentials = razorpayCredentials();
        $payload = jsonInput();
        $amount = isset($payload['amount']) ? (int) $payload['amount'] : SUBSCRIPTION_AMOUNT_PAISE;
        $currency = strtoupper((string) ($payload['currency'] ?? SUBSCRIPTION_CURRENCY));
        $plan = (string) ($payload['plan'] ?? 'annual');
        $description = (string) ($payload['description'] ?? 'Annual subscription — all features unlocked');

        if ($amount <= 0) {
            respond(['error' => 'Payment amount must be greater than zero.'], 422);
        }

        if (!$credentials['configured']) {
            respond(['error' => 'Payment gateway is not configured. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.'], 503);
        }

        // Check if already subscribed
        $activeCheck = $pdo->prepare('SELECT status FROM subscriptions WHERE user_id = :user_id LIMIT 1');
        $activeCheck->execute(['user_id' => $userId]);
        $existing = $activeCheck->fetch();
        if (($existing['status'] ?? '') === 'active') {
            respond(['error' => 'You already have an active subscription.'], 409);
        }

        // Create Razorpay order
        $receipt = 'sub_' . $userId . '_' . time();
        $order = razorpayRequest('orders', [
            'amount' => $amount,
            'currency' => $currency,
            'receipt' => $receipt,
            'notes' => [
                'user_id' => (string) $userId,
                'product' => $plan,
                'description' => $description,
            ],
        ], $credentials['keyId'], $credentials['keySecret']);

        $orderId = (string) ($order['id'] ?? '');
        if ($orderId === '') {
            respond(['error' => 'Failed to create payment order.'], 502);
        }

        // Save order in DB – note column is `order_id` (not `razorpay_order_id`)
        $insert = $pdo->prepare(
            'INSERT INTO payments (order_id, user_id, amount, currency, status)
             VALUES (:order_id, :user_id, :amount, :currency, :status)'
        );
        $insert->execute([
            'order_id' => $orderId,
            'user_id' => $userId,
            'amount' => $amount,
            'currency' => $currency,
            'status' => 'created',
        ]);

        // Get user details for prefill
        $userStmt = $pdo->prepare('SELECT name, email FROM users WHERE id = :id LIMIT 1');
        $userStmt->execute(['id' => $userId]);
        $user = $userStmt->fetch() ?: [];

        respond([
            'orderId' => $orderId,
            'amount' => $amount,
            'currency' => $currency,
            'keyId' => $credentials['keyId'],
            'description' => $description,
            'prefill' => [
                'name' => $user['name'] ?? '',
                'email' => $user['email'] ?? '',
            ],
        ]);
    } catch (PDOException $e) {
        respond(['error' => 'Database error: ' . $e->getMessage()], 503);
    } catch (Throwable $e) {
        respond(['error' => 'Server error: ' . $e->getMessage()], 500);
    }
}

// ---------- VERIFY PAYMENT ----------
if ($method === 'POST' && ($action === 'verify' || $action === 'verify-payment')) {
    try {
        $pdo = db();
        $userId = requireAuth();
        $credentials = razorpayCredentials();

        if (!$credentials['configured']) {
            respond(['error' => 'Payment gateway is not configured.'], 503);
        }

        $body = jsonInput();
        $orderId = trim((string) ($body['razorpay_order_id'] ?? ''));
        $paymentId = trim((string) ($body['razorpay_payment_id'] ?? ''));
        $signature = trim((string) ($body['razorpay_signature'] ?? ''));

        if ($orderId === '' || $paymentId === '' || $signature === '') {
            respond(['error' => 'Missing payment verification details.'], 422);
        }

        $expectedSignature = hash_hmac('sha256', $orderId . '|' . $paymentId, $credentials['keySecret']);
        if (!hash_equals($expectedSignature, $signature)) {
            respond(['error' => 'Payment verification failed. Invalid signature.'], 400);
        }

        // Find the payment record – column is `order_id`
        $paymentStmt = $pdo->prepare(
            'SELECT id, user_id, status, amount FROM payments
             WHERE order_id = :order_id LIMIT 1'
        );
        $paymentStmt->execute(['order_id' => $orderId]);
        $payment = $paymentStmt->fetch();

        if (!$payment) {
            respond(['error' => 'Payment order not found.'], 404);
        }

        if ((int) $payment['user_id'] !== $userId) {
            respond(['error' => 'Payment order does not belong to this account.'], 403);
        }

        // If already paid, activate subscription and return
        if ($payment['status'] === 'paid') {
            $subscription = activateSubscription($pdo, $userId);
            respond([
                'verified' => true,
                'alreadyProcessed' => true,
                'subscription' => $subscription,
            ]);
        }

        // Begin transaction for updating payment and activating subscription
        $pdo->beginTransaction();

        try {
            $updatePayment = $pdo->prepare(
                'UPDATE payments
                 SET status = :status, created_at = CURRENT_TIMESTAMP
                 WHERE id = :id AND status = :current_status'
            );
            $updatePayment->execute([
                'status' => 'paid',
                'id' => $payment['id'],
                'current_status' => 'created',
            ]);

            if ($updatePayment->rowCount() === 0) {
                // Already processed by another request
                $pdo->rollBack();
                $subscription = activateSubscription($pdo, $userId);
                respond([
                    'verified' => true,
                    'alreadyProcessed' => true,
                    'subscription' => $subscription,
                ]);
            }

            $subscription = activateSubscription($pdo, $userId);
            $pdo->commit();

            respond([
                'verified' => true,
                'alreadyProcessed' => false,
                'subscription' => $subscription,
            ]);
        } catch (Throwable $e) {
            $pdo->rollBack();
            respond(['error' => 'Failed to activate subscription after payment.'], 500);
        }
    } catch (PDOException $e) {
        respond(['error' => 'Database error: ' . $e->getMessage()], 503);
    } catch (Throwable $e) {
        respond(['error' => 'Server error: ' . $e->getMessage()], 500);
    }
}

// ---------- FALLBACK ----------
respond(['error' => 'Route not found.'], 404);