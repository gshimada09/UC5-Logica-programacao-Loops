const prompt = require ("prompt-sync")();
let numero1 = Number(prompt("Qual numero voce quer digitar? "));
let numero2 = Number(prompt("Qual numero voce quer digitar? "));
let opcao = prompt("soma, subtracao, multiplicacao, divisao");


if (opcao == "Soma") {
	console.log(numero1 +  numero2)
} else if(opcao == "subtracao"){
	console.log(numero1 - numero2)
} else if(opcao == "multiplicacao"){
	console.log(numero1 * numero2)
} else if(opcao== "divisao"){
	console.log(numero1 / numero2)
}
