const prompt = require ("prompt-sync")();

let nome = prompt ("digite seu nome:");
let idade = prompt ("digite sua idade:");
let endereco = prompt ("digite seu endereco:");

console.log ("Cadastro salvo o seu nome e:"+nome+" tem"+idade+"anos "+"seu endereco e:"+endereco);