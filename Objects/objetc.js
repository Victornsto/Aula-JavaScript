const client1 = {
    name: "André",
    age: 36,
    cpf: "12345678910",
    email: "andre@email.com"
}
 function showClient(client) {
    console.log(`My name is ${client.name} and i'm ${client.age} years old. My 3 cpf's firsts numbers is ${client.cpf.substring(0,3)}`)
 }

 showClient(client1)

 const keys = ["name", "age", "cpf", "email"]

 function showClientWithKeys(client) {
    console.log(`My name is ${client[keys[0]]} and i'm ${client[keys[1]]} years old. My email adress is ${client[keys[3]]} and my cpf's firsts numbers is ${client[keys[2]].substring(0,3)}`)
 }

 showClientWithKeys(client1)
