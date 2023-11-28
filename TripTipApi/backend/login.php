<?php

require_once 'config.php';
use \Firebase\JWT\JWT;

$conn = (new DbConnect())->connect();
$requestData = json_decode(file_get_contents('php://input'));
$email = $requestData->email;
$password = $requestData->password;

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
    $jwt = JWT::encode($tokenPayload, 'YourSecretKey', 'HS256'); 
    $response = ['status' => 1, 'message' => 'Login successful', 'user' => $user, 'token' => $jwt,];
} else {
    $response = ['status' => 0, 'message' => 'Login failed'];
}
echo json_encode($response);

?>





