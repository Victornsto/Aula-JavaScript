//Creating a generic object
function Cliente(nome, cpf, email, saldo) {
    this.nome = nome,
    this.cpf = cpf,
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}
let victor = new Cliente("Victor","12345678910", "victor@email.com", 100)
victor.depositar(50)
console.table(victor)

//Creating a generic object inheriting another object
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

//creating a new method in the prototype of ClientPoupanca
ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor
}

const ju = new ClientePoupanca("Ju","12345678910","ju@email.com",100,300)

ju.depositarPoup(250)
console.table(ju)