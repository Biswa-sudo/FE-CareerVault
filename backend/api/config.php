<?php

declare(strict_types=1);

session_start();

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedOrigins = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
];

if (in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}

header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

function envValue(string $key, string $fallback): string
{
    $value = getenv($key);
    return $value !== false ? $value : $fallback;
}

function db(): PDO
{
    static $pdo = null;

    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $host = envValue('DB_HOST', 'localhost');
    $name = envValue('DB_NAME', 'bentureai');
    $user = envValue('DB_USER', 'root');
    $pass = envValue('DB_PASS', '');

    $dsn = sprintf('mysql:host=%s;dbname=%s;charset=utf8mb4', $host, $name);
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);

    return $pdo;
}

function jsonInput(): array
{
    $raw = file_get_contents('php://input');
    if (!$raw) {
        return [];
    }

    $parsed = json_decode($raw, true);
    return is_array($parsed) ? $parsed : [];
}

function respond(array $payload, int $statusCode = 200): void
{
    http_response_code($statusCode);
    echo json_encode($payload);
    exit;
}

function currentUserId(): ?int
{
    $userId = $_SESSION['user_id'] ?? null;
    return is_numeric($userId) ? (int) $userId : null;
}

function requireAuth(): int
{
    $userId = currentUserId();
    if ($userId === null) {
        respond(['error' => 'Unauthorized'], 401);
    }

    return $userId;
}

function decodeJsonColumn($value)
{
    if (!is_string($value) || $value === '') {
        return null;
    }

    $decoded = json_decode($value, true);
    return json_last_error() === JSON_ERROR_NONE ? $decoded : null;
}
