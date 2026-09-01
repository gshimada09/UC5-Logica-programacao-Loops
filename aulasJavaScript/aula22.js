const prompt = require ("prompt-sync")();

let opcao = prompt("estudante sim ou nao? ");
let idade = Number(prompt("Qual a sua idade? "));

if(idade >= 60 || opcao === "sim"){
	console.log("Desconto adquirido!") 
} else
	console.log("Desconto invalido!");