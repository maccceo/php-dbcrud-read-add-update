<?php 

    include ('API_header.php');

    $name = $_GET['name'];
    $brand = $_GET['brand'];
    $price = $_GET['price'];
    $expiring_date = $_GET['expiring_date'];
    
    // 

    $query = "
        INSERT INTO beverage (name, brand, price, expiring_date)
        VALUES 
            ('" . $name . "', '" . $brand . "', " . $price . ", '" . $expiring_date . "')";

    // Console.logga la query prima di effettivamente inviarla
    // echo json_encode(["query" => $query]);

    //oggetto complesso con anche i risultati dell'API
    $res = $conn -> query($query);

    // chiudi sessione per evitare x problemi
    $conn->close();

    // spedisci i dati come comodo oggetto JSON
    echo json_encode($res);

 ?>

