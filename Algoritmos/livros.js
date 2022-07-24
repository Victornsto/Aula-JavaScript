class Livraria {
    constructor(titulo, preco) {
        this.titulo = titulo
        this.preco = preco
    }
}

let precoslivros = []
const json = require("./livros.json")
for (const i in json) {
    let livros = new Livraria(json[i].titulo, json[i].preco)
    precoslivros.push(livros)
}

//console.table(precoslivros);


module.exports = precoslivros