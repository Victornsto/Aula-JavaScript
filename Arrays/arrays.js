idades = [30, 35, 28, 20]
nomes = ["Ana", "Juliana", "Leonardo", "Fulano"]
faculdade = [false, true, true, false]

funcionarios = [nomes,idades,faculdade]

for (let index = 0; index < funcionarios[0].length; index++) {
   console.log(`${funcionarios[0][index]} tem ${funcionarios[1][index]} anos e ${funcionarios[2][index] == false ? "não cursa faculdade": "cursa faculdade"}`)
}


//const funcio = (nameFun) => {
  //  if (funcionarios[0].includes(nameFun)) {
    //    index = funcionarios[0].indexOf(nameFun)
      //  console.log(`${funcionarios[0][index]} tem ${funcionarios[1][index]} anos e ${funcionarios[2][index] == false ? "não cursa faculdade": "cursa faculdade"}`)
    //} else {
      //  console.log(`${nameFun} não é um funcionário!`)
   // }
//}

//funcio("Victor")

//console.log(`${funcionarios[0][0]} tem ${funcionarios[1][0]} anos e ${funcionarios[2][0] == false ? "não cursa faculdade": "cursa faculdade"}`)
//console.log(`${funcionarios[0][1]} tem ${funcionarios[1][1]} anos e ${funcionarios[2][1] == false ? "não cursa faculdade": "cursa faculdade"}`)
//console.log(`${funcionarios[0][2]} tem ${funcionarios[1][2]} anos e ${funcionarios[2][2] == false ? "não cursa faculdade": "cursa faculdade"}`)