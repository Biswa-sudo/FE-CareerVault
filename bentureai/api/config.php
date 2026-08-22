<?php

// config.php page

declare(strict_types=1);

// ─────────────────────────────────────────────────────────────────────────────
// LOAD .env
// ─────────────────────────────────────────────────────────────────────────────

function loadDotEnv(string $projectRoot): void
{
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

        if (
            strlen($value) >= 2 &&
            (
                ($value[0] === '"' && $value[strlen($value) - 1] === '"') ||
                ($value[0] === "'" && $value[strlen($value) - 1] === "'")
            )
        ) {
            $value = substr($value, 1, -1);
        }

        putenv($key . '=' . $value);
        $_ENV[$key] = $value;
        $_SERVER[$key] = $value;
    }
}

// If this file is at /bentureai/api/config.php,
// dirname(__DIR__, 2) gives the project root (public_html).
loadDotEnv(dirname(__DIR__, 2));

// ─────────────────────────────────────────────────────────────────────────────
// SESSION & CORS
// ─────────────────────────────────────────────────────────────────────────────

$existing = session_get_cookie_params();

$isSecure = (($_SERVER['HTTPS'] ?? 'off') !== 'off');

$host = $_SERVER['HTTP_HOST'] ?? '';

$cookieDomain = '';

if (
    $host !== '' &&
    (
        str_ends_with($host, 'bentureai.com') ||
        str_contains($host, '.bentureai.com')
    )
) {
    $cookieDomain = '.' . preg_replace('/^www\./', '', $host);
}

if (PHP_VERSION_ID >= 70300) {

    session_set_cookie_params([
        'lifetime' => $existing['lifetime'] ?? 0,
        'path' => $existing['path'] ?? '/',
        'domain' => $cookieDomain !== ''
            ? $cookieDomain
            : ($existing['domain'] ?? ''),
        'secure' => $isSecure,
        'httponly' => true,
        'samesite' => 'None',
    ]);

} else {

    $path = ($existing['path'] ?? '/') . '; SameSite=None';

    session_set_cookie_params(
        $existing['lifetime'] ?? 0,
        $path,
        $cookieDomain !== ''
            ? $cookieDomain
            : ($existing['domain'] ?? ''),
        $isSecure,
        true
    );
}

session_start();

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

$allowedOrigin = (
    preg_match(
        '~^https?://(localhost|127\.0\.0\.1)(:\d+)?$~',
        $origin
    )
)
    ? $origin
    : (
        (($_SERVER['HTTPS'] ?? 'off') !== 'off')
            ? 'https://'
            : 'http://'
    ) . ($_SERVER['HTTP_HOST'] ?? '');

header('Access-Control-Allow-Origin: ' . $allowedOrigin);
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ─────────────────────────────────────────────────────────────────────────────
// BASIC HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function envValue(string $key, string $fallback = ''): string
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
    $name = envValue('DB_NAME', 'u181031192_bentureai');
    $user = envValue('DB_USER', 'u181031192_bentureai');
    $pass = envValue('DB_PASS', '');

    if (empty($name) || empty($user) || empty($pass)) {
        throw new PDOException(
            'Database credentials missing. Check your .env file.'
        );
    }

    $dsn = sprintf(
        'mysql:host=%s;dbname=%s;charset=utf8mb4',
        $host,
        $name
    );

    $pdo = new PDO(
        $dsn,
        $user,
        $pass,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]
    );

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

    return json_last_error() === JSON_ERROR_NONE
        ? $decoded
        : null;
}

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT / PLAN HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Get an active product using its slug.
 */
function getProductBySlug(string $slug): ?array
{
    $pdo = db();

    $stmt = $pdo->prepare(
        "
        SELECT *
        FROM products
        WHERE slug = :slug
          AND status = 'active'
        LIMIT 1
        "
    );

    $stmt->execute([
        ':slug' => $slug,
    ]);

    $product = $stmt->fetch();

    return $product ?: null;
}

/**
 * Get an active plan belonging to a specific product.
 */
function getPlanBySlug(int $productId, string $planSlug): ?array
{
    $pdo = db();

    $stmt = $pdo->prepare(
        "
        SELECT *
        FROM plans
        WHERE product_id = :product_id
          AND slug = :slug
          AND status = 'active'
        LIMIT 1
        "
    );

    $stmt->execute([
        ':product_id' => $productId,
        ':slug' => $planSlug,
    ]);

    $plan = $stmt->fetch();

    return $plan ?: null;
}

/**
 * Get the user's active subscription for a specific product.
 *
 * Legacy subscriptions with NULL product_id / plan_id are intentionally
 * ignored here. They will continue to be handled separately while we
 * migrate the application.
 */
function getActiveProductSubscription(
    int $userId,
    int $productId
): ?array {
    $pdo = db();

    $stmt = $pdo->prepare(
        "
        SELECT
            s.*,
            p.name AS plan_name,
            p.slug AS plan_slug,
            p.description AS plan_description,
            p.price AS plan_price,
            p.currency AS plan_currency,
            p.duration_days AS plan_duration_days
        FROM subscriptions s
        INNER JOIN plans p
            ON p.id = s.plan_id
        WHERE s.user_id = :user_id
          AND s.product_id = :product_id
          AND s.status = 'active'
          AND (
              s.expires_at IS NULL
              OR s.expires_at >= NOW()
          )
        ORDER BY s.id DESC
        LIMIT 1
        "
    );

    $stmt->execute([
        ':user_id' => $userId,
        ':product_id' => $productId,
    ]);

    $subscription = $stmt->fetch();

    return $subscription ?: null;
}

/**
 * Get all active features belonging to a subscription's plan.
 */
function getSubscriptionFeatures(array $subscription): array
{
    if (empty($subscription['plan_id'])) {
        return [];
    }

    $pdo = db();

    $stmt = $pdo->prepare(
        "
        SELECT
            f.id,
            f.product_id,
            f.name,
            f.slug,
            f.description,
            f.status
        FROM features f
        INNER JOIN plan_features pf
            ON pf.feature_id = f.id
        WHERE pf.plan_id = :plan_id
          AND f.status = 'active'
        ORDER BY f.id ASC
        "
    );

    $stmt->execute([
        ':plan_id' => (int) $subscription['plan_id'],
    ]);

    return $stmt->fetchAll();
}

/**
 * Check whether a user has an active subscription for a product.
 */
function userHasProductAccess(
    int $userId,
    int $productId
): bool {
    return getActiveProductSubscription(
        $userId,
        $productId
    ) !== null;
}

/**
 * Check whether a user has access to a specific feature
 * through an active plan for a product.
 */
function userHasFeatureAccess(
    int $userId,
    int $productId,
    string $featureSlug
): bool {
    $subscription = getActiveProductSubscription(
        $userId,
        $productId
    );

    if (!$subscription || empty($subscription['plan_id'])) {
        return false;
    }

    $pdo = db();

    $stmt = $pdo->prepare(
        "
        SELECT 1
        FROM features f
        INNER JOIN plan_features pf
            ON pf.feature_id = f.id
        WHERE pf.plan_id = :plan_id
          AND f.product_id = :product_id
          AND f.slug = :feature_slug
          AND f.status = 'active'
        LIMIT 1
        "
    );

    $stmt->execute([
        ':plan_id' => (int) $subscription['plan_id'],
        ':product_id' => $productId,
        ':feature_slug' => $featureSlug,
    ]);

    return (bool) $stmt->fetchColumn();
}

/**
 * Require an active subscription for a product.
 */
function requireProductAccess(
    int $userId,
    int $productId
): void {
    if (!userHasProductAccess($userId, $productId)) {
        respond(
            [
                'success' => false,
                'message' => 'Product subscription required',
            ],
            403
        );
    }
}

/**
 * Require a specific feature within a product.
 */
function requireFeatureAccess(
    int $userId,
    int $productId,
    string $featureSlug
): void {
    if (!userHasFeatureAccess(
        $userId,
        $productId,
        $featureSlug
    )) {
        respond(
            [
                'success' => false,
                'message' => 'Required feature subscription is not active',
            ],
            403
        );
    }
}