const idades = [30, 35, 28, 20]
const nomes = ["Ana", "Juliana", "Leonardo", "Fulano"]

idades.forEach((idade, index) => {
    if (idade >= 30) {
        console.log(`Um dos tios com 30 ou mais anos de idade é ${nomes[index]}`)
    }
});
