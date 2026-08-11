<?php

declare(strict_types=1);

require __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$action = $_GET['action'] ?? 'session';
$pdo = db();

if ($method === 'GET' && $action === 'session') {
    $userId = currentUserId();
    if ($userId === null) {
        respond(['authenticated' => false, 'user' => null]);
    }

    $stmt = $pdo->prepare('SELECT id, name, email, created_at FROM users WHERE id = :id LIMIT 1');
    $stmt->execute(['id' => $userId]);
    $user = $stmt->fetch();

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

if ($method === 'POST' && $action === 'logout') {
    session_unset();
    session_destroy();
    respond(['ok' => true]);
}

respond(['error' => 'Route not found.'], 404);
