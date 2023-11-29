<?php
    require_once 'config.php';

    $conn = (new DbConnect())->connect();

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

    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $destinations = $stmt->fetchAll(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($destinations);
?>
