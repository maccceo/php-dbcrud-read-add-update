<?php 

    include ('API_header.php');

    $id = $_GET['id'];

    $query = "
        DELETE FROM stanze
        WHERE id = " . $id . "
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


