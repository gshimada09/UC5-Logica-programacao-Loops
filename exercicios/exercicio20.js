const prompt = require("prompt-sync")();

let velocidade = Number(prompt("Digite sua velocidade! "));

if(velocidade <=40 ){
	console.log("Baixo")
} else if (velocidade <=70){
	console.log("Moderada")
} else if (velocidade <= 90){
	console.log("Alta")
} else
	console.log("Muito Alta!")
