<?php

declare(strict_types=1);

require __DIR__ . '/config.php';

$userId = requireAuth();
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$pdo = db();

if ($method === 'GET') {
    $stmt = $pdo->prepare('SELECT id, public_id, name, template_id, data_json, updated_at, created_at FROM cvs WHERE user_id = :user_id ORDER BY updated_at DESC');
    $stmt->execute(['user_id' => $userId]);

    $items = [];
    foreach ($stmt->fetchAll() as $row) {
        $items[] = [
            'id' => $row['public_id'],
            'name' => $row['name'],
            'templateId' => $row['template_id'],
            'data' => decodeJsonColumn($row['data_json']) ?? [],
            'updatedAt' => $row['updated_at'],
            'createdAt' => $row['created_at'],
        ];
    }

    respond(['items' => $items]);
}

if ($method === 'POST') {
    $body = jsonInput();

    $countStmt = $pdo->prepare('SELECT COUNT(*) AS total FROM cvs WHERE user_id = :user_id');
    $countStmt->execute(['user_id' => $userId]);
    $total = (int) (($countStmt->fetch()['total'] ?? 0));
    if ($total >= 10) {
        respond(['error' => 'CV limit reached (10).'], 422);
    }

    $publicId = trim((string) ($body['id'] ?? ''));
    if ($publicId === '' || $publicId === 'new') {
        $publicId = bin2hex(random_bytes(16));
    }

    $name = trim((string) ($body['name'] ?? 'Untitled CV'));
    $templateId = trim((string) ($body['templateId'] ?? 'classic-professional'));
    $dataJson = json_encode($body['data'] ?? []);

    $stmt = $pdo->prepare('INSERT INTO cvs (user_id, public_id, name, template_id, data_json) VALUES (:user_id, :public_id, :name, :template_id, :data_json)');
    $stmt->execute([
        'user_id' => $userId,
        'public_id' => $publicId,
        'name' => $name,
        'template_id' => $templateId,
        'data_json' => $dataJson,
    ]);

    respond([
        'item' => [
            'id' => $publicId,
            'name' => $name,
            'templateId' => $templateId,
            'data' => $body['data'] ?? [],
            'updatedAt' => date('c'),
        ],
    ], 201);
}

if ($method === 'PUT') {
    $body = jsonInput();
    $publicId = trim((string) ($body['id'] ?? ''));

    if ($publicId === '') {
        respond(['error' => 'CV id is required.'], 422);
    }

    $name = trim((string) ($body['name'] ?? 'Untitled CV'));
    $templateId = trim((string) ($body['templateId'] ?? 'classic-professional'));
    $dataJson = json_encode($body['data'] ?? []);

    $stmt = $pdo->prepare('UPDATE cvs SET name = :name, template_id = :template_id, data_json = :data_json, updated_at = CURRENT_TIMESTAMP WHERE user_id = :user_id AND public_id = :public_id');
    $stmt->execute([
        'name' => $name,
        'template_id' => $templateId,
        'data_json' => $dataJson,
        'user_id' => $userId,
        'public_id' => $publicId,
    ]);

    if ($stmt->rowCount() < 1) {
        respond(['error' => 'CV not found.'], 404);
    }

    respond([
        'item' => [
            'id' => $publicId,
            'name' => $name,
            'templateId' => $templateId,
            'data' => $body['data'] ?? [],
            'updatedAt' => date('c'),
        ],
    ]);
}

if ($method === 'DELETE') {
    $publicId = trim((string) ($_GET['id'] ?? ''));
    if ($publicId === '') {
        respond(['error' => 'CV id is required.'], 422);
    }

    $stmt = $pdo->prepare('DELETE FROM cvs WHERE user_id = :user_id AND public_id = :public_id');
    $stmt->execute([
        'user_id' => $userId,
        'public_id' => $publicId,
    ]);

    respond(['ok' => true]);
}

respond(['error' => 'Route not found.'], 404);
