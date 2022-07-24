 class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    mostarSaldo() {
        console.log(`O saldo de ${this.nome} é R$ ${this.saldo}`);
    }
    depositar(valor) {
        this.saldo += valor
        console.log(`O valor de R$ ${valor} foi depositado com sucesso!`)
        this.mostarSaldo()
    }
 }
var victor = []
victor = new Cliente("Victor", "victor.com", "12345678910", 3500.00)
victor = new Cliente("joão", "joao.com", "12345678", 3400.00)
 console.table(victor)
 victor.mostarSaldo()
 victor.depositar(400)

 class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca

    }
    mostrarSaldoPoup() {
        console.log(`O saldo da poupança de ${this.nome} é R$ ${this.saldoPoupanca}`);
    }
    depositarPoup(valor){
        this.saldoPoupanca += valor
        console.log(`O valor de R$ ${valor} foi depositado com sucesso na sua poupança!`);
        this.mostrarSaldoPoup()
    }

 }

 const fulano = new ClientePoupanca("fulano","fulano.com","77766688899",100.00,200.00)
 console.table(fulano)
 fulano.mostarSaldo()
 fulano.mostrarSaldoPoup()
 fulano.depositar(400)
 fulano.depositarPoup(200)