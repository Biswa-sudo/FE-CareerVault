<?php
require 'bentureai/api/config.php';
try {
    $pdo = db();
    echo "Connected successfully";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}