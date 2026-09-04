const prompt = require("prompt-sync")();

let valorCompra = Number(prompt("Qual o valor da sua compra! "));

if(valorCompra >=100){
	let desconto = valorCompra *0.10	
	console.log("Valor da compra foi de R$" + (valorCompra-desconto));
} else {
	console.log ("Valor compra foi de R$" + valorCompra);
}	
