<?php

require_once 'config.php';
use \Firebase\JWT\JWT;

$conn = (new DbConnect())->connect();
$requestData = json_decode(file_get_contents('php://input'));
$userId = $requestData->userId;

$sql = "SELECT is_admin
        FROM users
        WHERE id = :userId";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':userId', $userId);
$stmt->execute();
$result = $stmt->fetch(PDO::FETCH_ASSOC);

if ($result) {
    $isAdmin = $result['is_admin'];
    $response = ['status' => 1, 'message' => 'User is an admin', 'is_admin' => $isAdmin];
} else {
    $response = ['status' => 0, 'message' => 'User is not a admin'];
}
echo json_encode($response);

?>