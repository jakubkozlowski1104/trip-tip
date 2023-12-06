<?php
require_once 'config.php';

$conn = (new DbConnect())->connect();
$requestData = json_decode(file_get_contents('php://input'));

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userId = $requestData->userId;
    $name = $requestData->name;
    $email = $requestData->email;

    $sql = "UPDATE users SET name = :name, email = :email WHERE id = :userId";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':userId', $userId);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);

    try {
        $stmt->execute();
        $response = ['status' => 1, 'message' => 'User updated successfully'];
    } catch (PDOException $e) {
        $response = ['status' => 0, 'message' => 'Error updating user: ' . $e->getMessage()];
    }

    echo json_encode($response);
} else {
    echo json_encode(['status' => 0, 'message' => 'Invalid request method']);
}
?>
