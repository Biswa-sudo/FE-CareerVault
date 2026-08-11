<?php

declare(strict_types=1);

require __DIR__ . '/config.php';

$userId = requireAuth();
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$pdo = db();

if ($method === 'GET') {
    $key = trim((string) ($_GET['key'] ?? 'benture_spoken_english_progress'));
    $stmt = $pdo->prepare('SELECT key_name, data_json, language_preference, updated_at FROM spoken_english_progress WHERE user_id = :user_id AND key_name = :key_name LIMIT 1');
    $stmt->execute([
        'user_id' => $userId,
        'key_name' => $key,
    ]);

    $row = $stmt->fetch();
    respond([
        'item' => $row ? [
            'key' => $row['key_name'],
            'data' => decodeJsonColumn($row['data_json']) ?? [],
            'languagePreference' => $row['language_preference'] ?? null,
            'updatedAt' => $row['updated_at'],
        ] : null,
    ]);
}

if ($method === 'PUT') {
    $body = jsonInput();
    $key = trim((string) ($body['key'] ?? 'benture_spoken_english_progress'));
    $dataJson = json_encode($body['data'] ?? []);
    $languagePreference = trim((string) ($body['languagePreference'] ?? 'english'));

    $sql = 'INSERT INTO spoken_english_progress (user_id, key_name, data_json, language_preference)
            VALUES (:user_id, :key_name, :data_json, :language_preference)
            ON DUPLICATE KEY UPDATE data_json = VALUES(data_json), language_preference = COALESCE(VALUES(language_preference), language_preference), updated_at = CURRENT_TIMESTAMP';

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        'user_id' => $userId,
        'key_name' => $key,
        'data_json' => $dataJson,
        'language_preference' => $languagePreference,
    ]);

    respond(['ok' => true]);
}

respond(['error' => 'Route not found.'], 404);
