<?php

declare(strict_types=1);

require __DIR__ . '/config.php';

const SUBSCRIPTION_CURRENCY = 'INR';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$action = $_GET['action'] ?? '';

if ($action === 'create-order') {
    $action = 'create-order';
}

if ($action === 'verify-payment') {
    $action = 'verify-payment';
}


function razorpayCredentials(): array
{
    $keyId = envValue('RAZORPAY_KEY_ID', '');
    $keySecret = envValue('RAZORPAY_KEY_SECRET', '');

    return [
        'keyId' => $keyId,
        'keySecret' => $keySecret,
        'configured' => $keyId !== '' && $keySecret !== '',
    ];
}


function razorpayRequest(
    string $method,
    string $path,
    array $payload,
    string $keyId,
    string $keySecret
): array {
    $ch = curl_init(
        'https://api.razorpay.com/v1/' . ltrim($path, '/')
    );

    $options = [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json',
        ],
        CURLOPT_USERPWD => $keyId . ':' . $keySecret,
        CURLOPT_TIMEOUT => 30,
    ];

    if ($method === 'POST') {
        $options[CURLOPT_POST] = true;
        $options[CURLOPT_POSTFIELDS] = json_encode($payload);
    }

    curl_setopt_array($ch, $options);

    $responseBody = curl_exec($ch);
    $statusCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);

    curl_close($ch);

    if ($responseBody === false) {
        respond(
            ['error' => 'Payment gateway request failed: ' . $curlError],
            502
        );
    }

    $decoded = json_decode($responseBody, true);

    if (!is_array($decoded)) {
        respond(
            ['error' => 'Invalid payment gateway response.'],
            502
        );
    }

    if ($statusCode < 200 || $statusCode >= 300) {
        $message = (string) (
            $decoded['error']['description']
            ?? $decoded['error']
            ?? 'Payment gateway error.'
        );

        respond(['error' => $message], 502);
    }

    return $decoded;
}


/**
 * Find the selected plan from the database.
 *
 * The frontend sends the plan key/slug.
 * The actual price, product_id, plan_id and duration
 * always come from the database.
 */
function getPlan(PDO $pdo, string $planKey): array
{
    $stmt = $pdo->prepare(
        'SELECT
            id,
            product_id,
            name,
            slug,
            description,
            price,
            currency,
            duration_days,
            status
         FROM plans
         WHERE slug = :slug
           AND status = :status
         LIMIT 1'
    );

    $stmt->execute([
        'slug' => $planKey,
        'status' => 'active',
    ]);

    $plan = $stmt->fetch();

    if (!$plan) {
        respond(['error' => 'Selected subscription plan was not found.'], 404);
    }

    return $plan;
}


/**
 * Check whether the user already has an active subscription
 * for the selected product.
 */
function getActiveSubscription(
    PDO $pdo,
    int $userId,
    int $productId
): ?array {
    $stmt = $pdo->prepare(
        'SELECT
            id,
            user_id,
            product_id,
            plan_id,
            status,
            payment_date,
            starts_at,
            expires_at
         FROM subscriptions
         WHERE user_id = :user_id
           AND product_id = :product_id
           AND status = :status
         LIMIT 1'
    );

    $stmt->execute([
        'user_id' => $userId,
        'product_id' => $productId,
        'status' => 'active',
    ]);

    $row = $stmt->fetch();

    return $row ?: null;
}


/**
 * Activate or update a product subscription.
 */
function activateSubscription(
    PDO $pdo,
    int $userId,
    int $productId,
    int $planId,
    int $durationDays
): array {
    $now = new DateTimeImmutable('now');

    $startsAt = $now->format('Y-m-d H:i:s');

    $expiresAt = $now
        ->modify('+' . $durationDays . ' days')
        ->format('Y-m-d H:i:s');

    $paymentDate = $startsAt;

    /*
     * subscriptions has a unique key on:
     *
     * user_id + product_id
     *
     * Therefore one user can have:
     *
     * Career Vault
     * Spoken English
     * Benture AI
     *
     * simultaneously.
     */
    $sql = '
        INSERT INTO subscriptions (
            user_id,
            product_id,
            plan_id,
            status,
            payment_date,
            starts_at,
            expires_at
        )
        VALUES (
            :user_id,
            :product_id,
            :plan_id,
            :status,
            :payment_date,
            :starts_at,
            :expires_at
        )
        ON DUPLICATE KEY UPDATE
            plan_id = VALUES(plan_id),
            status = VALUES(status),
            payment_date = VALUES(payment_date),
            starts_at = VALUES(starts_at),
            expires_at = VALUES(expires_at),
            updated_at = CURRENT_TIMESTAMP
    ';

    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        'user_id' => $userId,
        'product_id' => $productId,
        'plan_id' => $planId,
        'status' => 'active',
        'payment_date' => $paymentDate,
        'starts_at' => $startsAt,
        'expires_at' => $expiresAt,
    ]);

    return [
        'status' => 'active',
        'productId' => $productId,
        'planId' => $planId,
        'paymentDate' => $paymentDate,
        'startsAt' => $startsAt,
        'expiresAt' => $expiresAt,
    ];
}


/**
 * ---------- CONFIG ENDPOINT ----------
 */
if ($method === 'GET' && $action === 'config') {
    $credentials = razorpayCredentials();

    respond([
        'configured' => $credentials['configured'],
        'currency' => SUBSCRIPTION_CURRENCY,
        'keyId' => $credentials['configured']
            ? $credentials['keyId']
            : null,
    ]);
}


/**
 * ---------- CREATE ORDER ----------
 */
if (
    $method === 'POST'
    && ($action === 'create-order' || $action === 'create_order')
) {
    try {
        $pdo = db();
        $userId = requireAuth();

        $credentials = razorpayCredentials();

        if (!$credentials['configured']) {
            respond([
                'error' =>
                    'Payment gateway is not configured. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.'
            ], 503);
        }

        $payload = jsonInput();

        $planKey = trim(
            (string) ($payload['plan'] ?? '')
        );

        if ($planKey === '') {
            respond([
                'error' => 'Subscription plan is required.'
            ], 422);
        }

        /*
         * IMPORTANT:
         *
         * Do NOT trust amount/productId/planId from frontend.
         *
         * Get everything from our database.
         */
        $plan = getPlan($pdo, $planKey);

        $productId = (int) $plan['product_id'];
        $planId = (int) $plan['id'];

        $amount = (int) round(
            ((float) $plan['price']) * 100
        );

        $currency = strtoupper(
            (string) ($plan['currency'] ?: SUBSCRIPTION_CURRENCY)
        );

        if ($amount <= 0) {
            respond([
                'error' => 'Invalid subscription price.'
            ], 422);
        }

        /*
         * Check subscription for THIS product only.
         */
        $existing = getActiveSubscription(
            $pdo,
            $userId,
            $productId
        );

        if ($existing) {
            respond([
                'error' =>
                    'You already have an active subscription for this product.'
            ], 409);
        }

        /*
         * Create Razorpay order.
         */
        $receipt = 'sub_' . $userId . '_' . time();

        $order = razorpayRequest(
            'POST',
            'orders',
            [
                'amount' => $amount,
                'currency' => $currency,
                'receipt' => $receipt,

                'notes' => [
                    'user_id' => (string) $userId,
                    'product_id' => (string) $productId,
                    'plan_id' => (string) $planId,
                    'plan' => (string) $plan['slug'],
                ],
            ],
            $credentials['keyId'],
            $credentials['keySecret']
        );

        $orderId = (string) ($order['id'] ?? '');

        if ($orderId === '') {
            respond([
                'error' => 'Failed to create payment order.'
            ], 502);
        }

        /*
         * Save payment order.
         *
         * We are keeping the existing payments table structure.
         */
        $insert = $pdo->prepare(
            'INSERT INTO payments (
                order_id,
                user_id,
                amount,
                currency,
                status
            )
            VALUES (
                :order_id,
                :user_id,
                :amount,
                :currency,
                :status
            )'
        );

        $insert->execute([
            'order_id' => $orderId,
            'user_id' => $userId,
            'amount' => $amount,
            'currency' => $currency,
            'status' => 'created',
        ]);

        /*
         * Get user details for Razorpay prefill.
         */
        $userStmt = $pdo->prepare(
            'SELECT name, email
             FROM users
             WHERE id = :id
             LIMIT 1'
        );

        $userStmt->execute([
            'id' => $userId
        ]);

        $user = $userStmt->fetch() ?: [];

        respond([
            'orderId' => $orderId,
            'amount' => $amount,
            'currency' => $currency,
            'keyId' => $credentials['keyId'],

            'productId' => $productId,
            'planId' => $planId,

            'plan' => $plan['slug'],
            'name' => $plan['name'],
            'description' => $plan['description'],
            'durationDays' => (int) $plan['duration_days'],

            'prefill' => [
                'name' => $user['name'] ?? '',
                'email' => $user['email'] ?? '',
            ],
        ]);

    } catch (PDOException $e) {
        error_log('[create-order] DB error: ' . $e->getMessage());

        respond([
            'error' => 'Database error while creating payment order.'
        ], 503);

    } catch (Throwable $e) {
        error_log('[create-order] Error: ' . $e->getMessage());

        respond([
            'error' => 'Server error while creating payment order.'
        ], 500);
    }
}


/**
 * ---------- VERIFY PAYMENT ----------
 */
if (
    $method === 'POST'
    && ($action === 'verify' || $action === 'verify-payment')
) {
    try {
        $pdo = db();
        $userId = requireAuth();

        $credentials = razorpayCredentials();

        if (!$credentials['configured']) {
            respond([
                'error' => 'Payment gateway is not configured.'
            ], 503);
        }

        $body = jsonInput();

        $orderId = trim(
            (string) ($body['razorpay_order_id'] ?? '')
        );

        $paymentId = trim(
            (string) ($body['razorpay_payment_id'] ?? '')
        );

        $signature = trim(
            (string) ($body['razorpay_signature'] ?? '')
        );

        if (
            $orderId === ''
            || $paymentId === ''
            || $signature === ''
        ) {
            respond([
                'error' =>
                    'Missing payment verification details.'
            ], 422);
        }

        /*
         * Verify Razorpay signature.
         */
        $expectedSignature = hash_hmac(
            'sha256',
            $orderId . '|' . $paymentId,
            $credentials['keySecret']
        );

        if (
            !hash_equals(
                $expectedSignature,
                $signature
            )
        ) {
            respond([
                'error' =>
                    'Payment verification failed. Invalid signature.'
            ], 400);
        }

        /*
         * Find our local payment order.
         */
        $paymentStmt = $pdo->prepare(
            'SELECT
                id,
                user_id,
                status,
                amount
             FROM payments
             WHERE order_id = :order_id
             LIMIT 1'
        );

        $paymentStmt->execute([
            'order_id' => $orderId
        ]);

        $payment = $paymentStmt->fetch();

        if (!$payment) {
            respond([
                'error' => 'Payment order not found.'
            ], 404);
        }

        if ((int) $payment['user_id'] !== $userId) {
            respond([
                'error' =>
                    'Payment order does not belong to this account.'
            ], 403);
        }

        /*
         * Retrieve the Razorpay order.
         *
         * This lets us recover product_id and plan_id
         * from Razorpay's server-side order notes.
         */
        $razorpayOrder = razorpayRequest(
            'GET',
            'orders/' . rawurlencode($orderId),
            [],
            $credentials['keyId'],
            $credentials['keySecret']
        );

        $notes = $razorpayOrder['notes'] ?? [];

        $productId = (int) ($notes['product_id'] ?? 0);
        $planId = (int) ($notes['plan_id'] ?? 0);

        if ($productId <= 0 || $planId <= 0) {
            respond([
                'error' =>
                    'Payment order does not contain valid product and plan information.'
            ], 422);
        }

        /*
         * Validate the plan/product relationship
         * against our database.
         */
        $planStmt = $pdo->prepare(
            'SELECT
                id,
                product_id,
                name,
                slug,
                description,
                price,
                currency,
                duration_days,
                status
             FROM plans
             WHERE id = :plan_id
               AND product_id = :product_id
               AND status = :status
             LIMIT 1'
        );

        $planStmt->execute([
            'plan_id' => $planId,
            'product_id' => $productId,
            'status' => 'active',
        ]);

        $plan = $planStmt->fetch();

        if (!$plan) {
            respond([
                'error' =>
                    'Invalid product and subscription plan.'
            ], 422);
        }

        /*
         * If payment was already processed,
         * return the existing subscription.
         */
        if ($payment['status'] === 'paid') {
            $subscription = getActiveSubscription(
                $pdo,
                $userId,
                $productId
            );

            if ($subscription) {
                respond([
                    'verified' => true,
                    'alreadyProcessed' => true,
                    'subscription' => [
                        'status' => $subscription['status'],
                        'productId' => (int) $subscription['product_id'],
                        'planId' => (int) $subscription['plan_id'],
                        'paymentDate' => $subscription['payment_date'],
                        'startsAt' => $subscription['starts_at'],
                        'expiresAt' => $subscription['expires_at'],
                    ],
                ]);
            }
        }

        /*
         * Make sure the Razorpay order amount matches
         * the database plan price.
         */
        $expectedAmount = (int) round(
            ((float) $plan['price']) * 100
        );

        if ((int) $payment['amount'] !== $expectedAmount) {
            respond([
                'error' =>
                    'Payment amount does not match the selected subscription plan.'
            ], 400);
        }

        /*
         * Update payment + subscription atomically.
         */
        $pdo->beginTransaction();

        try {
            $updatePayment = $pdo->prepare(
                'UPDATE payments
                 SET status = :status
                 WHERE id = :id
                   AND status = :current_status'
            );

            $updatePayment->execute([
                'status' => 'paid',
                'id' => $payment['id'],
                'current_status' => 'created',
            ]);

            if ($updatePayment->rowCount() === 0) {
                /*
                 * Another request already processed this payment.
                 */
                $pdo->rollBack();

                $subscription = getActiveSubscription(
                    $pdo,
                    $userId,
                    $productId
                );

                respond([
                    'verified' => true,
                    'alreadyProcessed' => true,
                    'subscription' => $subscription,
                ]);
            }

            /*
             * Activate THIS product + THIS plan.
             */
            $subscription = activateSubscription(
                $pdo,
                $userId,
                $productId,
                $planId,
                (int) $plan['duration_days']
            );

            $pdo->commit();

            respond([
                'verified' => true,
                'alreadyProcessed' => false,
                'subscription' => $subscription,
            ]);

        } catch (Throwable $e) {
            if ($pdo->inTransaction()) {
                $pdo->rollBack();
            }

            error_log(
                '[verify-payment] Transaction error: '
                . $e->getMessage()
            );

            respond([
                'error' =>
                    'Failed to activate subscription after payment.'
            ], 500);
        }

    } catch (PDOException $e) {
        error_log('[verify-payment] DB error: ' . $e->getMessage());

        respond([
            'error' => 'Database error while verifying payment.'
        ], 503);

    } catch (Throwable $e) {
        error_log('[verify-payment] Error: ' . $e->getMessage());

        respond([
            'error' => 'Server error while verifying payment.'
        ], 500);
    }
}


/**
 * ---------- FALLBACK ----------
 */
respond([
    'error' => 'Route not found.'
], 404);