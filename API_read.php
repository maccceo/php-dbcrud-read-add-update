<?php 

    include ('API_header.php');

    $query = "
        SELECT id, room_number, floor, beds
        FROM stanze
        WHERE floor >= 5
    ";

    //oggetto complesso con anche i risultati dell'API
    $res = $conn -> query($query);

    // se mySQL esiste e ha delle righe procedi
    if ($res && $res -> num_rows > 0) {

        $results = [];

        // "$res -> fetch_assoc()" passa alla riga successiva, lo fa a fine while
        // se row esiste procedi 
        while($row = $res -> fetch_assoc()) {
            $results[] = $row;
        }
    }

    // chiudi sessione per evitare x problemi
    $conn->close();

    // spedisci i dati come comodo oggetto JSON
    echo json_encode($results);

 ?>


