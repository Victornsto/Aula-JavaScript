function menorValor(arrLivos, indexInicial) {
    let maisBarato = indexInicial

    for (let atual = indexInicial; atual < arrLivos.length; atual++) {
        if (arrLivos[atual].preco < arrLivos[maisBarato].preco) {
            maisBarato = atual
        }   

    }
    return maisBarato
}

module.exports =  menorValor