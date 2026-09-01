let pessoa = {
    nome: "gustavo",
    idade: 20,
    cidade: "Sao Paulo",
    sexo : "Masculino",
    profissao: "jogador",
    altura: 1.75,
};



for (let chave in pessoa) {
    console.log(chave);
    console.log(pessoa [chave]);   
}
