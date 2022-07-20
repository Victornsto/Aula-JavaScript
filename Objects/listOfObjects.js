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
    ]
  }

  client1.dependent.push({
    name: "Leticia",
    relationship: "Children",
    birth: "02/01/2000"
  })

  console.log(client1);