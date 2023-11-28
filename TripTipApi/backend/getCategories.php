<?php

require_once 'config.php';
use \Firebase\JWT\JWT;

$conn = (new DbConnect())->connect();
$requestData = json_decode(file_get_contents('php://input'));
$destinationId = $requestData->destinationId;

$sql = "SELECT c.* FROM categories c
        INNER JOIN destinations d ON c.id = d.category_id
        WHERE d.id = :destinationId";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':destinationId', $destinationId);
$stmt->execute();
$categories = $stmt->fetchAll(PDO::FETCH_ASSOC);

if ($categories) {
    $response = ['status' => 1, 'message' => 'Categories fetched successfully', 'categories' => $categories];
} else {
    $response = ['status' => 0, 'message' => 'No categories found for this destination'];
}
echo json_encode($response);

?>
