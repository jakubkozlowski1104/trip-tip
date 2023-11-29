<?php

require_once 'config.php';

$conn = (new DbConnect())->connect();
$requestData = json_decode(file_get_contents('php://input'));
$userId = $requestData->userId;

$sql = "SELECT destination_id 
        FROM user_likes
        WHERE user_id = :userId";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':userId', $userId);
$stmt->execute();
$destinations = $stmt->fetchAll(PDO::FETCH_ASSOC);

$destinationIdLikes = [];
foreach ($destinations as $destination) {
    $destinationIdLikes[] = $destination['destination_id'];
}

if ($destinationIdLikes) {
    $response = ['status' => 1, 'message' => 'User likes fetched successfully', 'destinations' => $destinationIdLikes];
} else {
    $response = ['status' => 0, 'message' => 'No likes found for this user'];
}
echo json_encode($response);


?>