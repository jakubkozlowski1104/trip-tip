<?php
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Credentials: true");
    exit();
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

require_once 'vendor/autoload.php'; // Adjust the path according to your project structure
use \Firebase\JWT\JWT;

include 'DbConnect.php';
$objDb = new DbConnect();
$conn = $objDb->connect();


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
         }  elseif ($actionType === 'login') {
            $email = $requestData->inputs->email;
            $password = $requestData->inputs->password;
    
            $sql = "SELECT * FROM users WHERE email = :email AND password = :password";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':password', $password);
            $stmt->execute();
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
            if ($user) {
                $tokenPayload = array(
                    "user_id" => $user['id'],
                    "email" => $user['email']
                );
                $jwt = JWT::encode($tokenPayload, 'YourSecretKey', 'HS256'); // Change 'YourSecretKey' to your actual secret key
                $response = ['status' => 1, 'message' => 'Login successful', 'user' => $user, 'token' => $jwt,];
            } else {
                $response = ['status' => 0, 'message' => 'Login failed'];
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
    case "GET":
        $sql = "SELECT * FROM users";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if (isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        header('Content-Type: application/json');
        echo json_encode($users);
        break;
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





