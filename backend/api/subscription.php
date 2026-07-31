<?php

declare(strict_types=1);

require __DIR__ . '/config.php';

$userId = requireAuth();
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$pdo = db();

if ($method === 'GET') {
    $stmt = $pdo->prepare('SELECT status, payment_date FROM subscriptions WHERE user_id = :user_id LIMIT 1');
    $stmt->execute(['user_id' => $userId]);
    $row = $stmt->fetch();

    respond([
        'status' => $row['status'] ?? 'inactive',
        'paymentDate' => $row['payment_date'] ?? null,
    ]);
}

if ($method === 'POST' || $method === 'PUT') {
    $body = jsonInput();
    $status = (string) ($body['status'] ?? 'active');
    if (!in_array($status, ['active', 'inactive'], true)) {
        $status = 'active';
    }

    $paymentDate = $status === 'active' ? date('c') : null;

    $sql = 'INSERT INTO subscriptions (user_id, status, payment_date)
            VALUES (:user_id, :status, :payment_date)
            ON DUPLICATE KEY UPDATE status = VALUES(status), payment_date = VALUES(payment_date), updated_at = CURRENT_TIMESTAMP';

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        'user_id' => $userId,
        'status' => $status,
        'payment_date' => $paymentDate,
    ]);

    respond(['status' => $status, 'paymentDate' => $paymentDate]);
}

respond(['error' => 'Route not found.'], 404);
