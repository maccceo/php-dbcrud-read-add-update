
$(document).ready(function() {
	//carica tutte le bevande
	getBeverage();
    // $(document).on("click",".add_room",addRoom);
    // $(document).on("click",".update_room",updateRoom);
    // $(document).on("click",".delete_room",deleteRoom);
});


// # # CREATE # # 
function addRoom() {

	$.ajax({
		url: "API_create.php",
		method: "GET",
		data: getBeverageParams(),
		success: function(data) {
			console.log("Risultato aggiunta stanza:",data);
			//carica tutte le stanze
			getBeverage();
		}
	});
}

// # # READ # # 
function getBeverage() {
	$.ajax({
		url: "API_read.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			printBeverage(data);
		},
		error: function(error, status, other) {
			console.log('errore API', error);
			console.log(status);
			console.log(other);
		}
	});
}

// # # UPDATE # # 
function updateRoom() {

	$.ajax({
		url: "API_update.php",
		method: "GET",
		data: getBeverageParams( getID($(this)) ),
		success: function(data) {
			console.log("Risultato aggiornamento stanza:",data);
			//carica tutte le stanze
			getBeverage();
		}
	});
}

// # # DELETE # # 
function deleteRoom() {
	$.ajax({
		url: "API_delete.php",
		method: "GET",
		data: {id: getID($(this))},
		success: function(data) {
			console.log("stanza eliminata:",data);
			//carica tutte le stanze
			getBeverage();
		}
	});
}

function printBeverage(data) {
	// init handlebars
	var source   = document.getElementById("item-template").innerHTML;
	var template = Handlebars.compile(source);
	
	var destinazione = $(".beverage-container");

	$(".beverage").remove();

	for (var i = 0; i < data.length; i++) {
		var beverage = data[i];

		// compilo template coi dati passati
		var html = template(beverage);
		// li aggiungo alla pagina
		destinazione.append(html);
	}
}


function getBeverageParams(id) {
	var room_number = prompt("Numero stanza:");
	var floor = prompt("Piano:");
	var beds = prompt("N° letti:");

	var result = {
		room_number: room_number,
		floor: floor,
		beds: beds,
		id: id
	}
	console.log(result);
	return result;
}

function getID(buttonPressed) {
	return buttonPressed.parent().data("id");
}