<?php

require_once 'config.php';

$conn = (new DbConnect())->connect();
$requestData = json_decode(file_get_contents('php://input'));

if ($requestData && property_exists($requestData, 'category') && property_exists($requestData, 'userId') && property_exists($requestData, 'interactionType')) {
    $category = $requestData->category;
    $userId = $requestData->userId;
    $interactionType = $requestData->interactionType;

    $sql = "";

    if ($interactionType === 'liked') {
        $sql = "SELECT 
        destinations.id AS destination_id,
        destinations.title,
        destinations.publish_date,
        destinations.description,
        destinations.likes,
        destinations.saves,
        destinations.image_path AS destination_image_path,
        destinations.map_img,
        destinations.map_link,
        countries.name AS country_name,
        countries.flag_path
    FROM 
        destinations
    JOIN 
        countries ON destinations.country = countries.id
    JOIN
        destination_category ON destinations.id = destination_category.destination_id
    JOIN
        categories ON destination_category.category_id = categories.id
    JOIN
        user_likes ON destinations.id = user_likes.destination_id
    WHERE 
        user_likes.user_id = :userId
        AND categories.name = :category";
    } elseif ($interactionType === 'saved') {
        $sql = "SELECT 
        destinations.id AS destination_id,
        destinations.title,
        destinations.publish_date,
        destinations.description,
        destinations.likes,
        destinations.saves,
        destinations.image_path AS destination_image_path,
        destinations.map_img,
        destinations.map_link,
        countries.name AS country_name,
        countries.flag_path
    FROM 
        destinations
    JOIN 
        countries ON destinations.country = countries.id
    JOIN
        destination_category ON destinations.id = destination_category.destination_id
    JOIN
        categories ON destination_category.category_id = categories.id
    JOIN
        user_saves ON destinations.id = user_saves.destination_id
    WHERE 
        user_saves.user_id = :userId
        AND categories.name = :category
    ";
    } elseif ($interactionType === 'all') {
        if ($category === 'none') {
            $sql = "SELECT 
                destinations.id AS destination_id,
                destinations.title,
                destinations.publish_date,
                destinations.description,
                destinations.likes,
                destinations.saves,
                destinations.image_path AS destination_image_path,
                destinations.map_img,
                destinations.map_link,
                countries.name AS country_name,
                countries.flag_path
            FROM 
                destinations
            JOIN 
                countries ON destinations.country = countries.id";
        } else {
            $sql = "SELECT 
            destinations.id AS destination_id,
            destinations.title,
            destinations.publish_date,
            destinations.description,
            destinations.likes,
            destinations.saves,
            destinations.image_path AS destination_image_path,
            destinations.map_img,
            destinations.map_link,
            countries.name AS country_name,
            countries.flag_path
        FROM 
            destinations
        JOIN 
            countries ON destinations.country = countries.id
        JOIN
            destination_category ON destinations.id = destination_category.destination_id
        JOIN
            categories ON destination_category.category_id = categories.id
        WHERE 
            categories.name = :category";
        }
    }

    try {
        $stmt = $conn->prepare($sql);
        if ($interactionType !== 'all') {
            $stmt->bindParam(':userId', $userId, PDO::PARAM_INT);
        }
        if ($interactionType !== 'all' && $interactionType !== 'liked' && $interactionType !== 'saved') {
            $stmt->bindParam(':category', $category, PDO::PARAM_STR);
        }
        $stmt->execute();
        $destinations = $stmt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-Type: application/json');
        echo json_encode($destinations);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['status' => 0, 'message' => 'Wystąpił błąd serwera']);
    }
}

?>