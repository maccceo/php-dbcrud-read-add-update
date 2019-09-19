<?php 

    header ('Content-type: application/json');

    $servername = 'localhost';
    $username = 'matteo';
    $password = 'bool';
    $dbname = 'esercitazioni';

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Controllo errori
    if ($conn -> connect_error) {
      var_dump('error');
      var_dump($conn);
      die();
    }

?>