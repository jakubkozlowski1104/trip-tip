<?php
require_once 'config.php';

$conn = (new DbConnect())->connect();
$requestData = json_decode(file_get_contents('php://input'));

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $requestData->name;
    $email = $requestData->email;
    $password = $requestData->password;

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT); // Hashing the password

    $sql = "INSERT INTO users (name, email, password, is_admin) VALUES (:name, :email, :password, 0)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $hashedPassword);

    try {
        $stmt->execute();
        $response = ['status' => 1, 'message' => 'User added successfully'];
    } catch (PDOException $e) {
        $response = ['status' => 0, 'message' => 'Error adding user: ' . $e->getMessage()];
    }

    echo json_encode($response);
} else {
    echo json_encode(['status' => 0, 'message' => 'Invalid request method']);
}
?>
