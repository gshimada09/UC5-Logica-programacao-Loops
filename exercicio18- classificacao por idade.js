const prompt = require("prompt-sync")();

let idade = Number(prompt("Qual sua idade"));

if(idade <= 12 ){
	console.log("Voce é crianca")

} else if (idade <= 17){
	console.log("Voce é adolescente")

} else if(idade <= 60){
	console.log("Voce é adulto")

} else{
	console.log("Voce é idoso")
}

