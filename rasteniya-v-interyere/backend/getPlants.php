<?php
require_once 'login.php';
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name);
$mysqli->set_charset("utf8mb4");

$id = $_GET['id'];

$result = $mysqli->query("SELECT Interior_plants.top, 
                                Interior_plants.left_px, 
                                Plants.name FROM `Interior_plants` 
                            INNER JOIN `Plants` 
                            ON Plants.id = Interior_plants.id_Plants
                            WHERE Interior_plants.id_interior = '".$id."'");
$array = [];

if ($result) {

    while ($row = $result->fetch_assoc()) {
        $array[] = $row;
    }

    $result = array(
        'info' => $array,
        'type' => $type,
        'code' => 'ok'
    );

    echo json_encode($result);

} else {

    $result = array(
        'code' => 'error',
        'info' => mysqli_error($conn)
    );
    
    echo json_encode($result);
}

?>
