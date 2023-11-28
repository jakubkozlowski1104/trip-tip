<?php
require_once 'config.php';
use \Firebase\JWT\JWT;

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $requestData = json_decode(file_get_contents('php://input'));
        $actionType = $requestData->action;
case "PUT":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE users SET name= :name, email= :email WHERE id =:id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $user->id);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':name', $user->name);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record'];
        }
        echo json_encode($response);
        break;
    case "DELETE":
        $sql = "DELETE FROM users WHERE id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[3]);
        $stmt->execute();
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record'];
        }
        echo json_encode($response);
        break;
    }
?>