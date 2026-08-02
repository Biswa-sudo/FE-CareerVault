<?php

declare(strict_types=1);

require __DIR__ . '/config.php';

$userId = requireAuth();
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$pdo = db();

if ($method === 'GET') {
    $stmt = $pdo->prepare('SELECT public_id, name, mime_type, data_url, uploaded_at FROM documents WHERE user_id = :user_id ORDER BY uploaded_at DESC');
    $stmt->execute(['user_id' => $userId]);

    $items = [];
    foreach ($stmt->fetchAll() as $row) {
        $items[] = [
            'id' => $row['public_id'],
            'name' => $row['name'],
            'type' => $row['mime_type'],
            'data' => $row['data_url'],
            'uploadedAt' => $row['uploaded_at'],
        ];
    }

    respond(['items' => $items]);
}

if ($method === 'POST') {
    $body = jsonInput();
    $publicId = bin2hex(random_bytes(16));
    $name = trim((string) ($body['name'] ?? 'document'));
    $mimeType = trim((string) ($body['type'] ?? 'application/octet-stream'));
    $dataUrl = (string) ($body['data'] ?? '');

    if ($dataUrl === '') {
        respond(['error' => 'Document data is required.'], 422);
    }

    $stmt = $pdo->prepare('INSERT INTO documents (user_id, public_id, name, mime_type, data_url) VALUES (:user_id, :public_id, :name, :mime_type, :data_url)');
    $stmt->execute([
        'user_id' => $userId,
        'public_id' => $publicId,
        'name' => $name,
        'mime_type' => $mimeType,
        'data_url' => $dataUrl,
    ]);

    respond(['ok' => true], 201);
}

if ($method === 'DELETE') {
    $publicId = trim((string) ($_GET['id'] ?? ''));
    if ($publicId === '') {
        respond(['error' => 'Document id is required.'], 422);
    }

    $stmt = $pdo->prepare('DELETE FROM documents WHERE user_id = :user_id AND public_id = :public_id');
    $stmt->execute([
        'user_id' => $userId,
        'public_id' => $publicId,
    ]);

    respond(['ok' => true]);
}

respond(['error' => 'Route not found.'], 404);
