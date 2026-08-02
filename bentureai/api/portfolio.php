<?php

declare(strict_types=1);

require __DIR__ . '/config.php';

$userId = requireAuth();
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$type = trim((string) ($_GET['type'] ?? 'data'));
if (!in_array($type, ['data', 'template'], true)) {
    $type = 'data';
}

$pdo = db();

if ($method === 'GET') {
    $stmt = $pdo->prepare('SELECT kind, data_json, updated_at FROM portfolios WHERE user_id = :user_id AND kind = :kind LIMIT 1');
    $stmt->execute([
        'user_id' => $userId,
        'kind' => $type,
    ]);
    $row = $stmt->fetch();

    respond([
        'item' => $row ? [
            'type' => $row['kind'],
            'data' => decodeJsonColumn($row['data_json']) ?? [],
            'updatedAt' => $row['updated_at'],
        ] : null,
    ]);
}

if ($method === 'PUT') {
    $body = jsonInput();
    $data = $body['data'] ?? [];

    $sql = 'INSERT INTO portfolios (user_id, kind, data_json)
            VALUES (:user_id, :kind, :data_json)
            ON DUPLICATE KEY UPDATE data_json = VALUES(data_json), updated_at = CURRENT_TIMESTAMP';

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        'user_id' => $userId,
        'kind' => $type,
        'data_json' => json_encode($data),
    ]);

    respond(['ok' => true]);
}

respond(['error' => 'Route not found.'], 404);
