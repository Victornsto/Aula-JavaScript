const idades = [30, 20, 25, 32]
const nomes = ["Ana", "Juliana", "Leonardo", "Fulano"]

const trintao = nomes.filter((tios, index) => idades[index] >= 30 )
console.log(`Os tios com mais de 30 anos de idade são ${trintao}`)