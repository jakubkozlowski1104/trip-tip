<?php
require_once 'config.php';

$conn = (new DbConnect())->connect();
$requestData = json_decode(file_get_contents('php://input'));
$userId = $requestData->userId; 

$sql = "SELECT COUNT(*) as notifyCount FROM reviews WHERE user_id = :userId AND show_notify = 1";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':userId', $userId);
$stmt->execute();
$notifyCount = $stmt->fetch(PDO::FETCH_ASSOC);

if ($notifyCount) {
    $response = ['status' => 1, 'message' => 'Notify count fetched successfully', 'notifyCount' => $notifyCount['notifyCount']];
} else {
    $response = ['status' => 0, 'message' => 'No notify count found'];
}
echo json_encode($response);

?>