const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Digite o numero! "));
let numero2 = Number(prompt("Digite outro numero! "));
let operacao = prompt("Digite qual sua operacao deseja! ")

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;

if (operacao == soma ){
	console.log ("Resultado " + (numero1 + numero2 ));
} else if (operacao == subtracao){
	console.log ("Resultado " + (numero1 - numero2 ));
} else if (operacao == multiplicacao ){
	console.log ("Resultado " + (numero1 * numero2 ));
} else {
	console.log ("Resultado " + (numero1 / numero2 ));
}