<?php
require_once 'config.php';

$conn = (new DbConnect())->connect();
$requestData = json_decode(file_get_contents('php://input'));

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $reviewId = $requestData->reviewId;

    $sql = "UPDATE reviews SET is_accepted = 1, is_checked = 1, show_notify = 1 WHERE id = :reviewId";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':reviewId', $reviewId);

    try {
        $stmt->execute();
        $response = ['status' => 1, 'message' => 'Flags updated successfully'];
    } catch (PDOException $e) {
        $response = ['status' => 0, 'message' => 'Error updating flags: ' . $e->getMessage()];
    }

    echo json_encode($response);
} else {
    echo json_encode(['status' => 0, 'message' => 'Invalid request method']);
}
?>
