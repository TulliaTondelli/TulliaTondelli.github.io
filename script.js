function premimi() {

	let nome = document.getElementById("Nome");
	let citta = document.getElementById("Città");
	let info = document.getElementById("Info");
	let numero = document.getElementById("Numero");
	let email = document.getElementById("Email");

	let stringa = "Ciao " + nome.value + " di " + citta.value + "! Ti contatteremo presto al " + numero.value + " o alla mail " + email.value + ".";


	document.getElementById("p").innerHTML = stringa;	
}