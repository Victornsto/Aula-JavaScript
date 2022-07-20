const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com",
    //Função vinculada a um objeto
    adicionarTipo:function(propriedade,tipo){
        this[propriedade].push(tipo)
      }
   }

   for(i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao","HQ"+ (i+1))
  }

  console.log(colecionador);