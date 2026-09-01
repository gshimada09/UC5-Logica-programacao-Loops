const prompt = require ("prompt-sync")();

const professor = prompt ("O professor veio? Escreva sim ou nao ");

if (professor == "sim") {
	console.log("o professor veio")
} else {
	console.log("o profesor faltou")
}

