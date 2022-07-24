// import precoslivros from "./livros.mjs";
// import menorValor from "./livroMaisBarato.mjs";

const precoslivros = require("./livros")
const menorValor = require("./livroMaisBarato")

precoslivros.forEach((i, atual) => {
    let menor = menorValor(precoslivros, atual)

    //console.log("Posição", atual);
    //console.log("Livro atual", precoslivros[atual])
    let livroAtual = precoslivros[atual]
    //console.log("Livro com menor preço", precoslivros[menor])
    let menorPreco = precoslivros[menor]

    precoslivros[atual] = menorPreco
    precoslivros[menor] = livroAtual
});

console.table(precoslivros)