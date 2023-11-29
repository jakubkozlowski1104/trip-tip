<?php

require_once 'config.php';
use \Firebase\JWT\JWT;

$conn = (new DbConnect())->connect();
$requestData = json_decode(file_get_contents('php://input'));
$destinationId = $requestData->destinationId;

$sql = "SELECT 
reviews.content AS review_content, 
reviews.review_type AS review_type, 
users.name AS user_name 
FROM 
destinations_reviews 
INNER JOIN 
reviews ON destinations_reviews.review_id = reviews.id 
INNER JOIN 
users ON reviews.user_id = users.id 
WHERE 
destinations_reviews.destination_id = :destinationId 
ORDER BY 
reviews.publish_date DESC 
LIMIT 
1;

";

$stmt = $conn->prepare($sql);
$stmt->bindParam(':destinationId', $destinationId);
$stmt->execute();
$review = $stmt->fetchAll(PDO::FETCH_ASSOC);

if ($review) {
    $response = ['status' => 1, 'message' => 'Review fetched successfully', 'review' => $review];
} else {
    $response = ['status' => 0, 'message' => 'No Reviews found for this destination'];
}
echo json_encode($response);

?>
