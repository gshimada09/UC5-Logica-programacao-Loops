const prompt = require ("prompt-sync")();

let valor1 = Number(prompt("Qual valor da compra?"));

if(valor1 >= 500 ){
	console.log(valor1 - (valor1 * 0.20));
	console.log("Seu desconto é de 20%")
} else if (valor1 <= 200){
	console.log(valor1 - (valor1 * 0.10));
	console.log("Seu desconto é de 10%")
} else if (valor1 => 100){
	console.log(valor1 - (valor1 * 0.05));
	console.log("Seu desconto é de 5%")
} else
	console.log("Voce nao adquiriu o desconto ");
