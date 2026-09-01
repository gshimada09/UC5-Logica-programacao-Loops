let pessoa = {
    nome: "Leandro",
    idade: 30,
    cidade: "Sao Paulo",
    sexo : "Masculino",
    profissao: "Programador",
    altura: 1.75,
};

for (let propriedade in pessoa) {
    console.log(propriedade);
}