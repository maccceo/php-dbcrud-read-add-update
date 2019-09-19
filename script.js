
$(document).ready(function() {
	//carica tutte le bevande
	getBeverage();

    $(document).on("click",".add_beverage",addBeverage);
    $(document).on("click",".update_beverage",updateBeverage);
    $(document).on("click",".delete_beverage",deleteBeverage);
});


// # # CREATE # # 
function addBeverage() {
	$.ajax({
		url: "API_create.php",
		method: "GET",
		data: getBeverageParams(),
		success: function(data) {
			console.log("Risultato aggiunta bevanda:",data);
			//carica tutte le stanze
			getBeverage();
		},
		error: function(error,status,other) {
			console.log('errore API', error);
			console.log(status);
			console.log(other);
		}
	});
}

// # # READ # # 
function getBeverage() {
	$.ajax({
		url: "API_read.php",
		method: "GET",
		success: function(data) {
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
function updateBeverage() {
	$.ajax({
		url: "API_update.php",
		method: "GET",
		data: getBeverageParams( getID($(this)) ),
		success: function(data) {
			console.log("Risultato aggiornamento prodotto:",data);
			//carica tutte le stanze
			getBeverage();
		}
	});
}

// # # DELETE # # 
function deleteBeverage() {
	var check = prompt("Sicuro? Scrivi 'si'").toLowerCase();
	if (check == "si") {
		$.ajax({
			url: "API_delete.php",
			method: "GET",
			data: {id: getID($(this))},
			success: function(data) {
				console.log("prodotto eliminato:",data);
				//carica tutte le stanze
				getBeverage();
			}
		});
	}
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
	var name = prompt("Nome bevanda:");
	var brand = prompt("Marca bevanda:");
	var price = Number(prompt("Prezzo:"));
	var expiring_date = prompt("Data di scadenza:");

	var result = {
		id: id,
		name: name,
		brand: brand,
		price: price,
		expiring_date: expiring_date
	}
	return result;
}

function getID(buttonPressed) {
	return buttonPressed.parent().data("id");
}