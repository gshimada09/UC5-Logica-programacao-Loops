const prompt = require ("prompt-sync")();

let produto = prompt("Digite nome do produto!:")
let preco = Number(prompt("Qual preco do produto!:"))
let quantidade = Number(prompt("Quantidade do produto!:"))

console.log(produto+ preco + quantidade + "ValorTotal =" + preco *quantidade);
