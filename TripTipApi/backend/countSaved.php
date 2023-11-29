<?php

require_once 'config.php';

$conn = (new DbConnect())->connect();

$sql = "SELECT destination_id, COUNT(*) as saves_count FROM user_saves GROUP BY destination_id";

$stmt = $conn->prepare($sql);
$stmt->execute();

$savesCountPerDestination = [];

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $savesCountPerDestination[] = $row;
}

echo json_encode($savesCountPerDestination);


?>
