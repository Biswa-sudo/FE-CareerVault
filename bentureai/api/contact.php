<?php

declare(strict_types=1);

require __DIR__ . '/config.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$pdo = db();

if ($method === 'POST') {
    $body = jsonInput();
    $name = trim((string) ($body['name'] ?? ''));
    $email = strtolower(trim((string) ($body['email'] ?? '')));
    $phone = trim((string) ($body['phone'] ?? ''));
    $subject = trim((string) ($body['subject'] ?? ''));
    $message = trim((string) ($body['message'] ?? ''));

    if ($name === '' || $email === '' || $phone === '' || $subject === '' || $message === '') {
        respond(['error' => 'All contact form fields are required.'], 422);
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        respond(['error' => 'Please enter a valid email address.'], 422);
    }

    try {
        $stmt = $pdo->prepare('
            INSERT INTO contact_messages (name, email, phone, subject, message)
            VALUES (:name, :email, :phone, :subject, :message)
        ');

        $stmt->execute([
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'subject' => $subject,
            'message' => $message,
        ]);

        // Record insertion succeeded — capture inserted id and timestamp
        $insertId = (int) $pdo->lastInsertId();
        $timestamp = date('c');

        // Attempt to send notification email (do not fail the request if mail fails)
        $mailStatus = ['ok' => false];

        // Prefer Composer autoload if available
        $vendorAutoload = dirname(__DIR__) . '/vendor/autoload.php';
        if (is_file($vendorAutoload)) {
            require_once $vendorAutoload;
        }

        if (class_exists('\PHPMailer\\PHPMailer\\PHPMailer')) {
            try {
                $mail = new \PHPMailer\PHPMailer\PHPMailer(true);

                // SMTP config from environment
                $smtpHost = envValue('SMTP_HOST', '');
                $smtpPort = (int) envValue('SMTP_PORT', '587');
                $smtpUser = envValue('SMTP_USER', '');
                $smtpPass = envValue('SMTP_PASS', '');
                $smtpSecure = envValue('SMTP_SECURE', 'tls'); // tls or ssl
                $smtpFrom = envValue('SMTP_FROM', 'no-reply@bentureai.com');
                $smtpFromName = envValue('SMTP_FROM_NAME', 'BentureAI');

                if ($smtpHost !== '' && $smtpUser !== '') {
                    $mail->isSMTP();
                    $mail->Host = $smtpHost;
                    $mail->SMTPAuth = true;
                    $mail->Username = $smtpUser;
                    $mail->Password = $smtpPass;
                    $mail->SMTPSecure = $smtpSecure;
                    $mail->Port = $smtpPort;
                }

                $mail->setFrom($smtpFrom, $smtpFromName);
                // Recipient: owner
                $mail->addAddress('biswaranjanpradhanofficial@gmail.com');

                // Reply-To: user who submitted form
                if ($email !== '') {
                    $mail->addReplyTo($email, $name ?: 'Website User');
                }

                $mail->isHTML(true);
                $mail->Subject = 'New contact form submission: ' . ($subject ?: 'No subject');

                $safeName = htmlspecialchars($name, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
                $safeEmail = htmlspecialchars($email, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
                $safePhone = htmlspecialchars($phone, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
                $safeSubject = htmlspecialchars($subject, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
                $safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));

                $body = "<h2>New contact form submission</h2>" .
                    "<p><strong>ID:</strong> {$insertId}</p>" .
                    "<p><strong>Received At:</strong> {$timestamp}</p>" .
                    "<p><strong>Name:</strong> {$safeName}</p>" .
                    "<p><strong>Email:</strong> {$safeEmail}</p>" .
                    "<p><strong>Phone:</strong> {$safePhone}</p>" .
                    "<p><strong>Subject:</strong> {$safeSubject}</p>" .
                    "<hr/>" .
                    "<div>{$safeMessage}</div>";

                $mail->Body = $body;
                $mail->AltBody = strip_tags(str_replace(['<br/>', '<br>', '<br />'], "\n", $body));

                $mail->send();
                $mailStatus = ['ok' => true];
            } catch (Exception $ex) {
                error_log('Contact mail error: ' . $ex->getMessage());
                $mailStatus = ['ok' => false, 'error' => $ex->getMessage()];
            }
        } else {
            // PHPMailer not available; log and continue
            error_log('PHPMailer not installed; skipping contact notification email.');
            $mailStatus = ['ok' => false, 'error' => 'PHPMailer not installed'];
        }

        respond([
            'ok' => true,
            'message' => 'Thanks for reaching out! We have received your message.',
            'id' => $insertId,
            'receivedAt' => $timestamp,
            'mail' => $mailStatus,
        ], 201);
    } catch (PDOException $e) {
        error_log('Contact form error: ' . $e->getMessage());
        respond(['error' => 'Unable to save your message. Please try again later.'], 500);
    }
}

respond(['error' => 'Route not found.'], 404);