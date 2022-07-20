const client1 = {
    name: 'André',
    age: 36,
    cpf: '12345678910',
    email: 'andre@gmail.com',
    phone: ['9198888-7777', '9187777-9999'],
    dependent: [
        {
            name: "João",
            relationship: "Son",
            birth: "25/04/1997"
           }
    ],
    saldo: 100,
    depositar:function(valor) {
        this.saldo += valor
    }
  }

  client1.dependent.push({
    name: "Leticia",
    relationship: "Children",
    birth: "02/01/2000"
  })

  let relatorio = "";
  //For in é usado para percorrer as informações de um objeto
  for (const info in client1) {
    if (typeof client1[info] === "object" || typeof client1[info] === "function") {
        continue // Pula para próxima iteração do laço
    }else{
        relatorio += `
       ${info} ==> ${client1[info]}
        `
    }
    }

    console.log(relatorio);

    function oferecerSeguro (obj) {
        const chavesCliente = Object.keys(obj) // Adicionar todas as chaves do obj na variavel
        const dep = [...obj.dependent] // ... ou Spread operator é um operador que pega um array de um objeto e resulta em uma variável.
        console.table(dep)
        //console.log(dep.length);
        if (chavesCliente.includes("dependent") && dep.length > 0) 
        {
            console.log(`Oferta de seguro de vida para ${obj.name}`);
        }
    }
    //console.log(Object.entries(client1))
    //console.log(Object.values(client1))
    oferecerSeguro(client1)