const prompt = require ("prompt-sync")();

let idade = Number(prompt("qual a idade? "));
let convite = prompt("tem convite? ");

if (idade >= 18 && convite === "sim"){
	console.log ("entrada permitida");
} else
	console.log("entrada negada");
