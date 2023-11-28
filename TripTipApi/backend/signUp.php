<?php
require_once 'config.php';
use \Firebase\JWT\JWT;

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $requestData = json_decode(file_get_contents('php://input'));
        $actionType = $requestData->action;
    
        if ($actionType === 'create') {
            $user = $requestData->inputs;
    
            $sql = "INSERT INTO users (name, email, password) VALUES (:name, :email, :password)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':name', $user->name);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':password', $user->password);
    
            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record created successfully'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create record'];
            }
         } elseif ($actionType === 'trySignUp') {
            $email = isset($requestData->inputs->email) ? $requestData->inputs->email : null;
            $name = isset($requestData->inputs->name) ? $requestData->inputs->name : null;
        
            $userByEmail = null;
            $userByName = null;
        
            if ($email) {
                $sql = "SELECT * FROM users WHERE email = :email";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':email', $email);
                $stmt->execute();
                $userByEmail = $stmt->fetch(PDO::FETCH_ASSOC);
            }
        
            if ($name) {
                $sql = "SELECT * FROM users WHERE name = :name";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':name', $name);
                $stmt->execute();
                $userByName = $stmt->fetch(PDO::FETCH_ASSOC);
            }
        
            if ($userByEmail && $userByName) {
                $response = ['status' => 3, 'message' => 'Both email and name already exist', 'user' => $userByEmail];
            } elseif ($userByEmail) {
                $response = ['status' => 2, 'message' => 'Email already exists', 'user' => $userByEmail];
            } elseif ($userByName) {
                $response = ['status' => 1, 'message' => 'Name already exists', 'user' => $userByName];
            } else {
                $response = ['status' => 0, 'message' => 'good'];
            }
        }
        
        echo json_encode($response);
        break;
    }
?>





