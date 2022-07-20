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

console.log(`Show cellphones of ${client1.name}`);
// How to show arrays in the objects
client1.phone.forEach(clls => {
    console.log(clls);
});

console.log(`Show the dependences of ${client1.name}`);
client1.dependent.forEach(dpcs => console.log(dpcs))