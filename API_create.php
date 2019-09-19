<?php 

    include ('API_header.php');

    $id = $_GET['id'];
    $room_number = $_GET['room_number'];
    $floor = $_GET['floor'];
    $beds = $_GET['beds'];
    

    $query = "
        INSERT INTO stanze (room_number, floor, beds)
        VALUES 
            (" . $room_number . ", " . $floor . ", " . $beds . ")
        ";

    // Console.logga la query prima di effettivamente inviarla
    // echo json_encode(["query" => $query]);

    //oggetto complesso con anche i risultati dell'API
    $res = $conn -> query($query);

    // chiudi sessione per evitare x problemi
    $conn->close();

    // spedisci i dati come comodo oggetto JSON
    echo json_encode($res);

 ?>