<?php

declare(strict_types=1);

require __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$pdo = db();

if ($method === 'POST') {
    $body = jsonInput();
    $name = trim((string) ($body['name'] ?? ''));
    $email = strtolower(trim((string) ($body['email'] ?? '')));
    $subject = trim((string) ($body['subject'] ?? ''));
    $message = trim((string) ($body['message'] ?? ''));

    if ($name === '' || $email === '' || $subject === '' || $message === '') {
        respond(['error' => 'All contact form fields are required.'], 422);
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        respond(['error' => 'Please enter a valid email address.'], 422);
    }

    try {
        $stmt = $pdo->prepare('
            INSERT INTO contact_messages (name, email, subject, message)
            VALUES (:name, :email, :subject, :message)
        ');

        $stmt->execute([
            'name' => $name,
            'email' => $email,
            'subject' => $subject,
            'message' => $message,
        ]);

        respond([
            'ok' => true,
            'message' => 'Thanks for reaching out! We have received your message.',
        ], 201);
    } catch (PDOException $e) {
        error_log('Contact form error: ' . $e->getMessage());
        respond(['error' => 'Unable to save your message. Please try again later.'], 500);
    }
}

respond(['error' => 'Route not found.'], 404);