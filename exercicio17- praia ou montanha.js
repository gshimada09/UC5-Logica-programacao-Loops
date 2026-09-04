const prompt = require("prompt-sync")();

let temperatura = Number(prompt("Qual sua temperatura no dia de hoje! "));

if (temperatura >=28 ){
	console.log("Praia é um melhor ambiente!")
} else {
	console.log("Montanha é melhor!")
}
