//Array para varrer uma string

const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA

let nm = ["arroz", "feijão"]
let newString = nm.map( letter => letter.toUpperCase())

console.log(newString)