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

  console.log(client1.saldo);
  client1.depositar(50);
  console.log(client1.saldo);