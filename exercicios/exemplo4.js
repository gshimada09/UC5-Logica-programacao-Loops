const prompt = require("prompt-sync")();

let escolha = Number(prompt("Digite o numero da tabuada que queira! "));

for(let contador = 1; contador <= 10; contador ++){
	console.log (escolha*contador) 

}