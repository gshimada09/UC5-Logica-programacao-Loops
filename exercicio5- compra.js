const prompt = require ("prompt-sync")();

let produto = prompt("Qual nome do produto ")
let preco = Number(prompt("Qual o preco do produto "));
let quantidade = Number(prompt("Qual a quantidade "));

let valorTotal = preco * quantidade;

console.log (quantidade + " x " + produto + "R$" + preco  );