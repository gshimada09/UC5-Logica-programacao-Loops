const prompt = require ("prompt-sync")();

let nota = Number(prompt("Digite sua nota!"));

if (nota < 5 ){
	console.log("Sua nota esta insuficiente!")
} else if (nota < 7 ){
	console.log("Sua nota esta regular!")
} else if (nota <= 8 ){ 
	console.log("Sua nota esta boa!")
} else
	console.log("Sua nota esta excelente!")