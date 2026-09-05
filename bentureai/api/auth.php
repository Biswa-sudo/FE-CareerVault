<?php

declare(strict_types=1);

require __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$action = $_GET['action'] ?? 'session';
$pdo = db();

$ensureProfileColumns = function () use ($pdo): void {
    $columns = [];
    $result = $pdo->query('SHOW COLUMNS FROM users');
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $columns[] = $row['Field'];
    }

    $additions = [
        'phone' => 'ALTER TABLE users ADD COLUMN phone VARCHAR(30) NULL AFTER email',
        'location' => 'ALTER TABLE users ADD COLUMN location VARCHAR(255) NULL AFTER phone',
        'bio' => 'ALTER TABLE users ADD COLUMN bio TEXT NULL AFTER location',
    ];

    foreach ($additions as $field => $sql) {
        if (!in_array($field, $columns, true)) {
            $pdo->exec($sql);
        }
    }
};

$fetchCurrentUser = function (int $userId) use ($pdo): ?array {
    $columns = [];
    $result = $pdo->query('SHOW COLUMNS FROM users');
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $columns[] = $row['Field'];
    }

    $selected = ['id', 'name', 'email'];
    foreach (['phone', 'location', 'bio'] as $field) {
        if (in_array($field, $columns, true)) {
            $selected[] = $field;
        }
    }
    $selected[] = 'created_at';

    $columnsSql = implode(', ', array_map(static fn (string $column) => '`' . str_replace('`', '``', $column) . '`', $selected));
    $stmt = $pdo->prepare("SELECT {$columnsSql} FROM users WHERE id = :id LIMIT 1");
    $stmt->execute(['id' => $userId]);
    return $stmt->fetch(PDO::FETCH_ASSOC) ?: null;
};

if ($method === 'GET' && $action === 'session') {
    $userId = currentUserId();
    if ($userId === null) {
        respond(['authenticated' => false, 'user' => null]);
    }

    $user = $fetchCurrentUser($userId);

    if (!$user) {
        session_unset();
        session_destroy();
        respond(['authenticated' => false, 'user' => null]);
    }

    respond(['authenticated' => true, 'user' => $user]);
}

if ($method === 'POST' && $action === 'signup') {
    $body = jsonInput();
    $name = trim((string) ($body['name'] ?? ''));
    $email = strtolower(trim((string) ($body['email'] ?? '')));
    $password = (string) ($body['password'] ?? '');

    if ($name === '' || $email === '' || $password === '') {
        respond(['error' => 'Name, email, and password are required.'], 422);
    }

    $check = $pdo->prepare('SELECT id FROM users WHERE email = :email LIMIT 1');
    $check->execute(['email' => $email]);
    if ($check->fetch()) {
        respond(['error' => 'Email already exists.'], 409);
    }

    $insert = $pdo->prepare('INSERT INTO users (name, email, password_hash) VALUES (:name, :email, :password_hash)');
    $insert->execute([
        'name' => $name,
        'email' => $email,
        'password_hash' => password_hash($password, PASSWORD_DEFAULT),
    ]);

    $userId = (int) $pdo->lastInsertId();
    $_SESSION['user_id'] = $userId;

    respond([
        'authenticated' => true,
        'user' => [
            'id' => $userId,
            'name' => $name,
            'email' => $email,
        ],
    ], 201);
}

if ($method === 'POST' && $action === 'login') {
    $body = jsonInput();
    $email = strtolower(trim((string) ($body['email'] ?? '')));
    $password = (string) ($body['password'] ?? '');

    if ($email === '' || $password === '') {
        respond(['error' => 'Email and password are required.'], 422);
    }

    $stmt = $pdo->prepare('SELECT id, name, email, password_hash FROM users WHERE email = :email LIMIT 1');
    $stmt->execute(['email' => $email]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($password, (string) $user['password_hash'])) {
        respond(['error' => 'Invalid credentials.'], 401);
    }

    $_SESSION['user_id'] = (int) $user['id'];
    respond([
        'authenticated' => true,
        'user' => [
            'id' => (int) $user['id'],
            'name' => $user['name'],
            'email' => $user['email'],
        ],
    ]);
}

if ($method === 'POST' && $action === 'update-profile') {
    $userId = currentUserId();
    if ($userId === null) {
        respond(['error' => 'Unauthorized.'], 401);
    }

    $ensureProfileColumns();

    $body = jsonInput();
    $name = trim((string) ($body['name'] ?? ''));
    $email = strtolower(trim((string) ($body['email'] ?? '')));
    $phone = trim((string) ($body['phone'] ?? ''));
    $location = trim((string) ($body['location'] ?? ''));
    $bio = trim((string) ($body['bio'] ?? ''));

    if ($name === '' || $email === '') {
        respond(['error' => 'Name and email are required.'], 422);
    }

    $check = $pdo->prepare('SELECT id FROM users WHERE LOWER(email) = LOWER(:email) AND id != :id LIMIT 1');
    $check->execute(['email' => $email, 'id' => $userId]);
    if ($check->fetch()) {
        respond(['error' => 'Email already exists.'], 409);
    }

    $columns = [];
    $result = $pdo->query('SHOW COLUMNS FROM users');
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $columns[] = $row['Field'];
    }

    $updateData = [
        'id' => $userId,
        'name' => $name,
        'email' => $email,
    ];
    $updateFields = ['name', 'email'];

    foreach (['phone', 'location', 'bio'] as $field) {
        if (in_array($field, $columns, true)) {
            $updateData[$field] = ${$field};
            $updateFields[] = $field;
        }
    }

    $sql = 'UPDATE users SET ' . implode(', ', array_map(static fn (string $field) => '`' . str_replace('`', '``', $field) . '` = :' . $field, $updateFields)) . ' WHERE id = :id';
    $stmt = $pdo->prepare($sql);
    $stmt->execute($updateData);

    $updatedUser = $fetchCurrentUser($userId);
    if (!$updatedUser) {
        respond(['error' => 'Failed to load updated profile.'], 500);
    }

    respond(['user' => $updatedUser]);
}

if ($method === 'POST' && $action === 'logout') {
    session_unset();
    session_destroy();
    respond(['ok' => true]);
}

respond(['error' => 'Route not found.'], 404);
