const arrayNums = [1, 2, 3, 4]

function multiplicaPorDez(num) {
    return num * 10
   }

let arrayMultiplicada = arrayNums.map(multiplicaPorDez)

console.log(arrayMultiplicada)