
$(document).ready(function() {
	//carica tutte le stanze
	getRoom();

    $(document).on("click",".add_room",addRoom);
    $(document).on("click",".update_room",updateRoom);
    $(document).on("click",".delete_room",deleteRoom);
});


// # # CREATE # # 
function addRoom() {

	$.ajax({
		url: "API_create.php",
		method: "GET",
		data: getRoomParams(),
		success: function(data) {
			console.log("Risultato aggiunta stanza:",data);
			//carica tutte le stanze
			getRoom();
		}
	});
}

// # # READ # # 
function getRoom() {
	$.ajax({
		url: "API_read.php",
		method: "GET",
		success: function(data) {
			printRoom(data);
		}
	});
}

// # # UPDATE # # 
function updateRoom() {

	$.ajax({
		url: "API_update.php",
		method: "GET",
		data: getRoomParams( getID($(this)) ),
		success: function(data) {
			console.log("Risultato aggiornamento stanza:",data);
			//carica tutte le stanze
			getRoom();
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
			getRoom();
		}
	});
}

function printRoom(data) {
	var destinazione = $(".stanze");

	$("li").remove();

	for (var i = 0; i < data.length; i++) {
		var stanza = data[i];
		var stampa =
			"<li data-id='" + stanza.id + "'>" +
				"<p>Numero stanza: " + stanza.room_number + "</p>" +
				"<p>Piano: " + stanza.floor + "</p>" +
				"<p>Letti: " + stanza.beds + "</p>" +
			"<button class='delete_room'>Elimina stanza</button>" +
			"<button class='update_room'>Modifica stanza</button></li>";
		//aggiungo album all'HTML
		destinazione.append(stampa);
	}
}


function getRoomParams(id) {
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