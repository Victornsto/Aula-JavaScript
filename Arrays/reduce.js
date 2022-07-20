const turma1 = [7.5, 10, 2, 8, 9.5]
const turma2 = [4.5, 6, 9, 10, 1.5]
const turma3 = [9, 7, 5.5, 8, 10, 10]

function verificarMedia(notas) {
    const notasSomadas = notas.reduce((acum, atual) => atual + acum,0)
    return notasSomadas / notas.length
}

const allClasses = [turma1, turma2, turma3]

allClasses.forEach( (classes, index) => {
    console.log(`Média da classe ${index + 1}: ${verificarMedia(classes)}`)
});