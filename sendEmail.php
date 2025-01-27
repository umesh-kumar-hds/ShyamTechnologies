<?php
// Set Content-Type to JSON
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get raw POST data
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate inputs
    $name = htmlspecialchars($data['name']);
    $email = htmlspecialchars($data['email']);
    $phone = htmlspecialchars($data['phone']);
    $course = htmlspecialchars($data['course']);

    // Prepare email details
    $to = "umesh.hds48@gmail.com"; // Replace with your email
    $subject = "New Course Enrollment";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nCourse: $course";
    $headers = "From: no-reply@yourdomain.com\r\nReply-To: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send email."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
