const prompt = require ("prompt-sync")(); 

let senha = Number(prompt("Digite sua senha! "));
let senhaCerta = 1234

if (senha === senhaCerta){
	console.log("senha correta");
}else
	console.log("senha incorreta");