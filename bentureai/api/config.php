<?php

declare(strict_types=1);

// ─── LOAD .env ──────────────────────────────────────────────
function loadDotEnv(string $projectRoot): void {
    $envPath = rtrim($projectRoot, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . '.env';
    if (!is_file($envPath)) {
        return;
    }

    $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if ($lines === false) {
        return;
    }

    foreach ($lines as $line) {
        $trimmed = trim($line);
        if ($trimmed === '' || str_starts_with($trimmed, '#')) {
            continue;
        }

        $parts = explode('=', $trimmed, 2);
        if (count($parts) !== 2) {
            continue;
        }

        $key = trim($parts[0]);
        $value = trim($parts[1]);
        // Remove surrounding quotes if present
        if (strlen($value) >= 2 && (($value[0] === '"' && $value[strlen($value) - 1] === '"') || ($value[0] === "'" && $value[strlen($value) - 1] === "'"))) {
            $value = substr($value, 1, -1);
        }

        putenv($key . '=' . $value);
        $_ENV[$key] = $value;
        $_SERVER[$key] = $value;
    }
}

// If this file is at /bentureai/api/config.php, then dirname(__DIR__, 2) gives the project root (public_html)
// Adjust if your structure is different – change the number of levels accordingly.
loadDotEnv(dirname(__DIR__, 2));

// ─── SESSION & CORS ─────────────────────────────────────────
session_start();

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedOrigin = (preg_match('~^https?://(localhost|127\.0\.0\.1)(:\d+)?$~', $origin))
    ? $origin
    : ((($_SERVER['HTTPS'] ?? 'off') !== 'off') ? 'https://' : 'http://') . ($_SERVER['HTTP_HOST'] ?? '');

header('Access-Control-Allow-Origin: ' . $allowedOrigin);
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ─── HELPERS ────────────────────────────────────────────────

function envValue(string $key, string $fallback = ''): string {
    $value = getenv($key);
    return $value !== false ? $value : $fallback;
}

function db(): PDO {
    static $pdo = null;

    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $host = envValue('DB_HOST', 'localhost');
    $name = envValue('DB_NAME', 'u181031192_bentureai');
    $user = envValue('DB_USER', 'u181031192_bentureai');
    $pass = envValue('DB_PASS', '');

    if (empty($name) || empty($user) || empty($pass)) {
        throw new PDOException('Database credentials missing. Check your .env file.');
    }

    $dsn = sprintf('mysql:host=%s;dbname=%s;charset=utf8mb4', $host, $name);
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);

    return $pdo;
}

function jsonInput(): array {
    $raw = file_get_contents('php://input');
    if (!$raw) {
        return [];
    }

    $parsed = json_decode($raw, true);
    return is_array($parsed) ? $parsed : [];
}

function respond(array $payload, int $statusCode = 200): void {
    http_response_code($statusCode);
    echo json_encode($payload);
    exit;
}

function currentUserId(): ?int {
    $userId = $_SESSION['user_id'] ?? null;
    return is_numeric($userId) ? (int) $userId : null;
}

function requireAuth(): int {
    $userId = currentUserId();
    if ($userId === null) {
        respond(['error' => 'Unauthorized'], 401);
    }
    return $userId;
}

function decodeJsonColumn($value) {
    if (!is_string($value) || $value === '') {
        return null;
    }
    $decoded = json_decode($value, true);
    return json_last_error() === JSON_ERROR_NONE ? $decoded : null;
}