<?php

declare(strict_types=1);

require __DIR__ . '/config.php';

$userId = requireAuth();
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$pdo = db();

if ($method === 'GET') {
    $stmt = $pdo->prepare('SELECT store_json FROM ai_chat_history WHERE user_id = :user_id LIMIT 1');
    $stmt->execute(['user_id' => $userId]);
    $row = $stmt->fetch();

    respond([
        'store' => $row ? (decodeJsonColumn($row['store_json']) ?? []) : [],
    ]);
}

if ($method === 'PUT') {
    $body = jsonInput();
    $store = is_array($body['store'] ?? null) ? $body['store'] : [];

    $sql = 'INSERT INTO ai_chat_history (user_id, store_json)
            VALUES (:user_id, :store_json)
            ON DUPLICATE KEY UPDATE store_json = VALUES(store_json), updated_at = CURRENT_TIMESTAMP';

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        'user_id' => $userId,
        'store_json' => json_encode($store),
    ]);

    respond(['ok' => true]);
}

respond(['error' => 'Route not found.'], 404);
