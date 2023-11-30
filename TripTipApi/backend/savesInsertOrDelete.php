<?php

require_once 'config.php';

$conn = (new DbConnect())->connect();
$requestData = json_decode(file_get_contents('php://input'));
$userId = $requestData->userId;
$destinationId = $requestData->destinationId;
$isSaved = $requestData->isSaved;


if ($isSaved == false) {
    $sql = "INSERT INTO user_saves (user_id, destination_id) VALUES (:userId, :destinationId)";
} else {
    $sql = "DELETE FROM user_saves WHERE user_id = :userId AND destination_id = :destinationId";
}

$stmt = $conn->prepare($sql);
$stmt->bindParam(':userId', $userId);
$stmt->bindParam(':destinationId', $destinationId);

try {
    $stmt->execute();
    $response = ['status' => 1, 'message' => 'Operation successful'];
} catch (PDOException $e) {
    $response = ['status' => 0, 'message' => 'Operation failed: ' . $e->getMessage()];
}

echo json_encode($response);

?>
