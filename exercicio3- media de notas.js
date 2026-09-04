const prompt = require ("prompt-sync")();

let nota1 =  Number(prompt("Qual foi sua nota! "));
let nota2 = Number(prompt("Qual foi sua nota! "));
let nota3 = Number(prompt("Qual foi sua nota! "));


let media = (nota1 + nota2 + nota3) /3;
 
console.log("Sua nota no total foi" + media)