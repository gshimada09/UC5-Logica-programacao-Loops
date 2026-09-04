const prompt = require ("prompt-sync")();

let nome = prompt("Digite seu nome!");
let idade = Number(prompt("Digite sua idade!"));
let cidade = prompt("Digite sua cidade!");

console.log(nome + ", " + idade + " anos, mora em " + cidade + ".")