let livros = require("./livros")

livros.forEach((_, atual) => {
    let analise = atual
    while (analise > 0 && livros[analise].preco < livros[analise -1].preco) {
        let livroAtual = livros[analise]
        let livroAnterior = livros[analise -1]

        livros[analise] = livroAnterior
        livros[analise -1] = livroAtual

        analise--
    }
});

console.table(livros)