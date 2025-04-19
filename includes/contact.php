<?php
header('Content-Type: application/json');

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Function to log errors
function logError($message) {
    $date = date('Y-m-d H:i:s');
    $logMessage = "[$date] $message\n";
    error_log($logMessage);
    @file_put_contents('php_errors.log', $logMessage, FILE_APPEND);
}

// Function to send JSON response
function sendResponse($status, $message) {
    echo json_encode(['status' => $status, 'message' => $message]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    logError("POST request received");
    
    // Get form data and sanitize
    $name = htmlspecialchars($_POST['name'] ?? '', ENT_QUOTES, 'UTF-8');
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST['subject'] ?? '', ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($_POST['message'] ?? '', ENT_QUOTES, 'UTF-8');
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        logError("Missing required fields");
        sendResponse('error', 'All fields are required');
    }
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        logError("Invalid email format: $email");
        sendResponse('error', 'Invalid email address');
    }
    
    try {
        if (!file_exists('vendor/autoload.php')) {
            logError("PHPMailer not installed. Please run 'composer require phpmailer/phpmailer'");
            sendResponse('error', 'Email service is not properly configured. Please contact the administrator.');
        }
        
        require 'vendor/autoload.php';
        
        // Create a new PHPMailer instance
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        
        // Enable verbose debug output
        $mail->SMTPDebug = 2;
        $mail->Debugoutput = function($str, $level) {
            logError("PHPMailer Debug: $str");
        };
        
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'shaikhtabrez56@gmail.com';
        $mail->Password = 'iujucjwkdxzxytbz';
        $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS; // Use SMTPS instead of STARTTLS
        $mail->Port = 465; // Use port 465 for SMTPS
        
        // Disable SSL verification for development
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        
        // Recipients
        $mail->setFrom('shaikhtabrez56@gmail.com', 'DevOps Portfolio');
        $mail->addAddress('shaikhtabrez56@gmail.com', 'Shamsh Tabrez');
        $mail->addReplyTo($email, $name);
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = "
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Subject:</strong> $subject</p>
            <p><strong>Message:</strong></p>
            <p>$message</p>
        ";
        
        logError("Attempting to send email via PHPMailer");
        $mail->send();
        
        logError("Email sent successfully");
        sendResponse('success', 'Message sent successfully!');
        
    } catch (Exception $e) {
        logError("PHPMailer Exception: " . $e->getMessage());
        sendResponse('error', 'An error occurred: ' . $e->getMessage());
    }
} else {
    logError("Invalid request method: " . $_SERVER['REQUEST_METHOD']);
    sendResponse('error', 'Invalid request method');
}
?>