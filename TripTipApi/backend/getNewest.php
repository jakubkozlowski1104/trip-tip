<?php

require_once 'config.php';
use \Firebase\JWT\JWT;

$conn = (new DbConnect())->connect();

$sql = "SELECT * FROM destinations ORDER BY id DESC";

$stmt = $conn->prepare($sql);
$stmt->execute();
$destinations = $stmt->fetchAll(PDO::FETCH_ASSOC);

if ($destinations) {
    $response = ['status' => 1, 'message' => 'Destinations fetched successfully', 'destinations' => $destinations];
} else {
    $response = ['status' => 0, 'message' => 'No destinations found'];
}
echo json_encode($response);

?>
