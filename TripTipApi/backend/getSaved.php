<?php

require_once 'config.php';

$conn = (new DbConnect())->connect();
$requestData = json_decode(file_get_contents('php://input'));
$userId = $requestData->userId;

$sql = "SELECT destination_id 
        FROM user_saves 
        WHERE user_id = :userId";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':userId', $userId);
$stmt->execute();
$destinations = $stmt->fetchAll(PDO::FETCH_ASSOC);

$destinationIds = [];
foreach ($destinations as $destination) {
    $destinationIds[] = $destination['destination_id'];
}

if ($destinationIds) {
    $response = ['status' => 1, 'message' => 'User saved fetched successfully', 'destinations' => $destinationIds];
} else {
    $response = ['status' => 0, 'message' => 'No saved found for this user'];
}
echo json_encode($response);


?>