<?php
require_once 'config.php';

$conn = (new DbConnect())->connect();
$requestData = json_decode(file_get_contents('php://input'));

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userId = $requestData->userId;
    $content = $requestData->content;
    $reviewType = $requestData->reviewType;

    $sql = "INSERT INTO reviews (content, review_type, user_id, is_accepted, is_checked, show_notify) VALUES (:content, :reviewType, :userId, 0, 0, 0)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':content', $content);
    $stmt->bindParam(':reviewType', $reviewType);
    $stmt->bindParam(':userId', $userId);

    try {
        $stmt->execute();
        $response = ['status' => 1, 'message' => 'Review added successfully'];
    } catch (PDOException $e) {
        $response = ['status' => 0, 'message' => 'Error adding review: ' . $e->getMessage()];
    }

    echo json_encode($response);
} else {
    echo json_encode(['status' => 0, 'message' => 'Invalid request method']);
}
?>
