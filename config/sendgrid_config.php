<?php
// Load environment variables
$envFile = __DIR__ . '/.env';
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '=') !== false && strpos($line, '#') !== 0) {
            list($key, $value) = explode('=', $line, 2);
            $_ENV[trim($key)] = trim($value);
        }
    }
}

// SendGrid Configuration
define('SENDGRID_API_KEY', $_ENV['SENDGRID_API_KEY'] ?? '');
define('FROM_EMAIL', $_ENV['FROM_EMAIL'] ?? '');
define('FROM_NAME', $_ENV['FROM_NAME'] ?? '');

// Validate configuration
if (empty(SENDGRID_API_KEY)) {
    error_log('SendGrid API key is not configured');
}
?> 