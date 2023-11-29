<?php

require_once 'config.php';

$conn = (new DbConnect())->connect();

$sql = "SELECT destination_id, COUNT(*) as likes_count FROM user_likes GROUP BY destination_id";

$stmt = $conn->prepare($sql);
$stmt->execute();

$likesCountPerDestination = [];

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $likesCountPerDestination[] = $row;
}

echo json_encode($likesCountPerDestination);


?>
