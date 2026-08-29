<?php

declare(strict_types=1);

require __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$type = trim((string) ($_GET['type'] ?? 'data'));
if (!in_array($type, ['data', 'template'], true)) {
    $type = 'data';
}

$pdo = db();
$emailParam = trim((string) ($_GET['email'] ?? ''));

if ($method === 'GET' && $emailParam !== '') {
    $profileStmt = $pdo->prepare('SELECT id, email FROM users WHERE LOWER(email) = LOWER(:email) LIMIT 1');
    $profileStmt->execute(['email' => $emailParam]);
    $profileUser = $profileStmt->fetch();

    if (!$profileUser) {
        respond(['error' => 'Profile not found.'], 404);
    }

    $currentUserId = currentUserId();
    $isOwner = $currentUserId !== null && (int) $currentUserId === (int) $profileUser['id'];

    if (!$isOwner) {
        $hasAccess = false;

        try {
            $accessStmt = $pdo->prepare(
                'SELECT 1
                 FROM subscriptions s
                 WHERE s.user_id = :user_id
                   AND s.status = :status
                   AND (
                       s.product_id = :career_vault_pro
                       OR s.product_id = 3
                   )
                 LIMIT 1'
            );
            $accessStmt->execute([
                'user_id' => (int) $profileUser['id'],
                'status' => 'active',
                'career_vault_pro' => 3,
            ]);
            $hasAccess = (bool) $accessStmt->fetch();
        } catch (Throwable $e) {
            $hasAccess = false;
        }

        if (!$hasAccess) {
            respond(['error' => 'Public profile is not available for this user.'], 403);
        }
    }

    $stmt = $pdo->prepare('SELECT kind, data_json, updated_at FROM portfolios WHERE user_id = :user_id AND kind = :kind LIMIT 1');
    $stmt->execute([
        'user_id' => (int) $profileUser['id'],
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

$userId = requireAuth();

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
