<?php

declare(strict_types=1);

require __DIR__ . '/config.php';

$userId = requireAuth();
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$pdo = db();

if ($method !== 'GET') {
    respond([
        'error' => 'Route not found.'
    ], 404);
}

/*
 * ---------------------------------------------------------
 * READ QUERY PARAMETERS
 * ---------------------------------------------------------
 */

$productIdRaw = $_GET['product_id'] ?? null;
$planRaw = $_GET['plan'] ?? null;

$productId = null;
$planSlug = null;

if ($productIdRaw !== null && $productIdRaw !== '') {

    if (!is_numeric($productIdRaw) || (int) $productIdRaw <= 0) {
        respond([
            'error' => 'Invalid product_id.'
        ], 422);
    }

    $productId = (int) $productIdRaw;
}

if ($planRaw !== null && trim((string) $planRaw) !== '') {
    $planSlug = trim((string) $planRaw);
}

/*
 * ---------------------------------------------------------
 * PRODUCT + PLAN SPECIFIC SUBSCRIPTION
 * ---------------------------------------------------------
 *
 * Example:
 *
 * /subscription.php?product_id=1&plan=career-vault
 *
 * Access is granted only when:
 *
 * user_id    = logged-in user
 * product_id = requested product
 * plan       = requested plan
 * status     = active
 * expires_at > current time
 *
 */

if ($productId !== null) {

    /*
     * If a plan was supplied, first resolve its database ID
     * from the plans table.
     */
    $planId = null;

    if ($planSlug !== null) {

        $planStmt = $pdo->prepare(
            'SELECT id
             FROM plans
             WHERE slug = :slug
             LIMIT 1'
        );

        $planStmt->execute([
            'slug' => $planSlug,
        ]);

        $planRow = $planStmt->fetch();

        /*
         * Unknown plan means the user cannot have access
         * to that requested product/plan combination.
         */
        if (!$planRow) {
            respond([
                'status' => 'inactive',
                'productId' => $productId,
                'planId' => null,
                'paymentDate' => null,
                'startsAt' => null,
                'expiresAt' => null,
                'plan' => null,
            ]);
        }

        $planId = (int) $planRow['id'];
    }

    /*
     * Mark expired subscription(s) as inactive.
     *
     * When plan is supplied, only that product + plan is
     * considered.
     */
    $expireSql = '
        UPDATE subscriptions
        SET status = :inactive
        WHERE user_id = :user_id
          AND product_id = :product_id
          AND status = :active
          AND expires_at IS NOT NULL
          AND expires_at <= NOW()
    ';

    $expireParams = [
        'inactive' => 'inactive',
        'user_id' => $userId,
        'product_id' => $productId,
        'active' => 'active',
    ];

    if ($planId !== null) {
        $expireSql .= ' AND plan_id = :plan_id';
        $expireParams['plan_id'] = $planId;
    }

    $expireStmt = $pdo->prepare($expireSql);
    $expireStmt->execute($expireParams);

    /*
     * Get subscription.
     */
    $sql = '
        SELECT
            s.id,
            s.user_id,
            s.product_id,
            s.plan_id,
            s.status,
            s.payment_date,
            s.starts_at,
            s.expires_at,

            pr.name AS product_name,
            pr.slug AS product_slug,

            p.name AS plan_name,
            p.slug AS plan_slug,
            p.description AS plan_description,
            p.duration_days

        FROM subscriptions s

        LEFT JOIN products pr
            ON pr.id = s.product_id

        LEFT JOIN plans p
            ON p.id = s.plan_id

        WHERE s.user_id = :user_id
          AND s.product_id = :product_id
    ';

    $params = [
        'user_id' => $userId,
        'product_id' => $productId,
    ];

    /*
     * If plan was supplied, require the exact plan.
     */
    if ($planId !== null) {
        $sql .= ' AND s.plan_id = :plan_id';
        $params['plan_id'] = $planId;
    }

    $sql .= '
        ORDER BY s.id DESC
        LIMIT 1
    ';

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    $row = $stmt->fetch();

    /*
     * No matching subscription.
     */
    if (!$row) {
        respond([
            'status' => 'inactive',
            'productId' => $productId,
            'planId' => $planId,
            'paymentDate' => null,
            'startsAt' => null,
            'expiresAt' => null,
            'plan' => null,
        ]);
    }

    /*
     * Double-check active status and expiration.
     */
    $isActive = $row['status'] === 'active';

    if ($isActive && !empty($row['expires_at'])) {

        try {
            $expiresAt = new DateTimeImmutable(
                (string) $row['expires_at']
            );

            $now = new DateTimeImmutable('now');

            if ($expiresAt <= $now) {
                $isActive = false;
            }

        } catch (Throwable $e) {
            $isActive = false;
        }
    }

    respond([
        'status' => $isActive ? 'active' : 'inactive',

        'productId' => (int) $row['product_id'],

        'product' => [
            'id' => (int) $row['product_id'],
            'name' => $row['product_name'] ?? null,
            'slug' => $row['product_slug'] ?? null,
        ],

        'planId' => $row['plan_id'] !== null
            ? (int) $row['plan_id']
            : null,

        'paymentDate' => $row['payment_date'] ?? null,

        'startsAt' => $row['starts_at'] ?? null,

        'expiresAt' => $row['expires_at'] ?? null,

        'plan' => $row['plan_id'] !== null
            ? [
                'id' => (int) $row['plan_id'],
                'name' => $row['plan_name'] ?? null,
                'slug' => $row['plan_slug'] ?? null,
                'description' => $row['plan_description'] ?? null,
                'durationDays' => $row['duration_days'] !== null
                    ? (int) $row['duration_days']
                    : null,
            ]
            : null,
    ]);
}


/*
 * ---------------------------------------------------------
 * ALL SUBSCRIPTIONS
 * ---------------------------------------------------------
 *
 * Used when:
 *
 * /subscription.php
 *
 * No product/plan filter.
 */

$expireAllStmt = $pdo->prepare(
    'UPDATE subscriptions
     SET status = :inactive
     WHERE user_id = :user_id
       AND status = :active
       AND expires_at IS NOT NULL
       AND expires_at <= NOW()'
);

$expireAllStmt->execute([
    'inactive' => 'inactive',
    'user_id' => $userId,
    'active' => 'active',
]);

$stmt = $pdo->prepare(
    'SELECT
        s.id,
        s.product_id,
        s.plan_id,
        s.status,
        s.payment_date,
        s.starts_at,
        s.expires_at,

        pr.name AS product_name,
        pr.slug AS product_slug,

        p.name AS plan_name,
        p.slug AS plan_slug,
        p.description AS plan_description,
        p.duration_days

     FROM subscriptions s

     LEFT JOIN products pr
        ON pr.id = s.product_id

     LEFT JOIN plans p
        ON p.id = s.plan_id

     WHERE s.user_id = :user_id

     ORDER BY s.id DESC'
);

$stmt->execute([
    'user_id' => $userId,
]);

$rows = $stmt->fetchAll();

$subscriptions = [];

foreach ($rows as $row) {

    $isActive = $row['status'] === 'active';

    if ($isActive && !empty($row['expires_at'])) {

        try {
            $expiresAt = new DateTimeImmutable(
                (string) $row['expires_at']
            );

            $now = new DateTimeImmutable('now');

            if ($expiresAt <= $now) {
                $isActive = false;
            }

        } catch (Throwable $e) {
            $isActive = false;
        }
    }

    $subscriptions[] = [

        'id' => (int) $row['id'],

        'productId' => $row['product_id'] !== null
            ? (int) $row['product_id']
            : null,

        'product' => [
            'id' => $row['product_id'] !== null
                ? (int) $row['product_id']
                : null,
            'name' => $row['product_name'] ?? null,
            'slug' => $row['product_slug'] ?? null,
        ],

        'planId' => $row['plan_id'] !== null
            ? (int) $row['plan_id']
            : null,

        'plan' => $row['plan_id'] !== null
            ? [
                'id' => (int) $row['plan_id'],
                'name' => $row['plan_name'] ?? null,
                'slug' => $row['plan_slug'] ?? null,
                'description' => $row['plan_description'] ?? null,
                'durationDays' => $row['duration_days'] !== null
                    ? (int) $row['duration_days']
                    : null,
            ]
            : null,

        'status' => $isActive
            ? 'active'
            : 'inactive',

        'paymentDate' => $row['payment_date'] ?? null,

        'startsAt' => $row['starts_at'] ?? null,

        'expiresAt' => $row['expires_at'] ?? null,
    ];
}

respond([
    'subscriptions' => $subscriptions,
]);