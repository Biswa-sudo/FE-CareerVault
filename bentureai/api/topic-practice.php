<?php

declare(strict_types=1);

require __DIR__ . '/config.php';

$userId = requireAuth();
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$pdo = db();

if ($method === 'GET') {
    $questionStmt = $pdo->prepare('SELECT question_id, topic, question_text, concept_text, user_answer, user_rating, created_at_ms FROM topic_questions WHERE user_id = :user_id ORDER BY created_at_ms ASC');
    $questionStmt->execute(['user_id' => $userId]);

    $questions = [];
    foreach ($questionStmt->fetchAll() as $row) {
        $questions[] = [
            'id' => $row['question_id'],
            'topic' => $row['topic'],
            'question' => $row['question_text'],
            'concept' => $row['concept_text'],
            'userAnswer' => $row['user_answer'],
            'userRating' => $row['user_rating'] !== null ? (int) $row['user_rating'] : null,
            'createdAt' => (int) $row['created_at_ms'],
        ];
    }

    $topicStmt = $pdo->prepare('SELECT topic FROM user_topics WHERE user_id = :user_id ORDER BY created_at ASC');
    $topicStmt->execute(['user_id' => $userId]);
    $usedTopics = array_map(static fn($row) => $row['topic'], $topicStmt->fetchAll());

    respond([
        'questions' => $questions,
        'usedTopics' => $usedTopics,
    ]);
}

if ($method === 'PUT') {
    $body = jsonInput();
    $questions = is_array($body['questions'] ?? null) ? $body['questions'] : [];
    $usedTopics = is_array($body['usedTopics'] ?? null) ? $body['usedTopics'] : [];

    $pdo->beginTransaction();

    try {
        $pdo->prepare('DELETE FROM topic_questions WHERE user_id = :user_id')->execute(['user_id' => $userId]);
        $pdo->prepare('DELETE FROM user_topics WHERE user_id = :user_id')->execute(['user_id' => $userId]);

        if (count($questions) > 0) {
            $insertQuestion = $pdo->prepare('INSERT INTO topic_questions
                (user_id, question_id, topic, question_text, concept_text, user_answer, user_rating, created_at_ms)
                VALUES (:user_id, :question_id, :topic, :question_text, :concept_text, :user_answer, :user_rating, :created_at_ms)');

            foreach ($questions as $q) {
                $insertQuestion->execute([
                    'user_id' => $userId,
                    'question_id' => (string) ($q['id'] ?? bin2hex(random_bytes(8))),
                    'topic' => trim((string) ($q['topic'] ?? '')),
                    'question_text' => (string) ($q['question'] ?? ''),
                    'concept_text' => (string) ($q['concept'] ?? ''),
                    'user_answer' => isset($q['userAnswer']) ? (string) $q['userAnswer'] : null,
                    'user_rating' => is_numeric($q['userRating'] ?? null) ? (int) $q['userRating'] : null,
                    'created_at_ms' => is_numeric($q['createdAt'] ?? null) ? (int) $q['createdAt'] : (int) round(microtime(true) * 1000),
                ]);
            }
        }

        if (count($usedTopics) > 0) {
            $insertTopic = $pdo->prepare('INSERT INTO user_topics (user_id, topic) VALUES (:user_id, :topic)');
            foreach ($usedTopics as $topic) {
                $cleanTopic = trim((string) $topic);
                if ($cleanTopic === '') {
                    continue;
                }
                $insertTopic->execute([
                    'user_id' => $userId,
                    'topic' => $cleanTopic,
                ]);
            }
        }

        $pdo->commit();
    } catch (Throwable $e) {
        error_log('[topic-practice.php] ' . $e->getMessage());
        $pdo->rollBack();
        respond(['error' => 'Failed to update topic practice data.'], 500);
    }

    respond(['ok' => true]);
}

respond(['error' => 'Route not found.'], 404);
