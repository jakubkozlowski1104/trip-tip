<?php
require_once 'config.php';

$conn = (new DbConnect())->connect();
$requestData = json_decode(file_get_contents('php://input'));

if ($requestData && property_exists($requestData, 'category')) {
    $category = $requestData->category;

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
    }

    try {
        $stmt = $conn->prepare($sql);
        if ($category !== 'none') {
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
