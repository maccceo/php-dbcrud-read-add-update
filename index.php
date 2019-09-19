<!DOCTYPE html>
<html lang="" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Bevande</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
    <script type="text/javascript" src="script.js"></script>
    <link rel="stylesheet" href="style.css">
    <!-- JS: HANDLEBARS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js"></script>
    <!-- TEMPLATE: MESSAGE MENU -->
    <script id="item-template" type="text/x-handlebars-template">
      <div class="beverage" data-id="{{id}}">
        <h3>{{name}}</h3>
        <span>by {{brand}}</span>
        <p>Prezzo: {{price}}€</p>
        <p>Data di scadenza: {{expiring_date}}</p>
        <button class="update_beverage">Modifica dati</button>
        <button class="delete_beverage">Elimina prodotto</button>
      </div>
    </script>
  </head>
  <body>
  	<div id="main-container">
      <h1>Bevande</h1>
      <button class="add_beverage">Aggiungi bevanda</button>
      <div class="beverage-container"></div>
    </div>
  </body>
</html>