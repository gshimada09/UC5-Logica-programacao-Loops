const prompt = require ("prompt-sync")();

let celsius = Number(prompt("Digite temperatura atual:"));
let fahrenheit = celsius *9/5+32;


console.log(celsius,"°C equivalem em fahrenheit ", fahrenheit)