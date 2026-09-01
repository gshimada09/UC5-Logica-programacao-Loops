const prompt = require ("prompt-sync")();

let celsius = Number(prompt("Temperatura em Celsius:"));
let fahrenheit = (celsius * 9 / 5) + 32;
 
console.log(celsius + "°C equivalem a " + fahrenheit + "°F");