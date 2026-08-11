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

respond(['error' => 'Route not found.'], 404);
