const prompt = require ("prompt-sync")();

let idade = Number(prompt("Digite sua idade!"));


if (idade => 60 ){
	 console.log("Voce é um idoso");
} else if (idade =>18 ){
	console.log("Voce é um adulto");
} else if (idade >=12 ){
	console.log("Você é um adolescente");
} else if (idade < 12 ){
	console.log("Você é uma crianca");
} else 
	console.log("Você é um bebe")
