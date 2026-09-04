const prompt = require ("prompt-sync")();

let idade = Number(prompt("Digite sua idade!"));
let nascimento = 2026 - idade;

console.log("Voce nasceu por volta de " + nascimento + ".");

