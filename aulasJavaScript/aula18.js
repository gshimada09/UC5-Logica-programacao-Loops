const prompt = require ("prompt-sync")();

let velocidade = Number(prompt("Qual velocidade você passou!"));


if (velocidade <= 30 ){
	console.log("Sua velocidade está baixo")
} else if (velocidade <= 50) {
	console.log("Sua velocidade ta moderada")
} else if (velocidade <= 80){
	console.log("Sua velocidade está acima da permitida")
} else 
	console.log("Sua velocidade está muito alta")
	 