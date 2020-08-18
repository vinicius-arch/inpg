class ContaCorrente{
    constructor (conta, nome, saldo){
        this.conta = conta;
        this.nome = nome;
        this.saldo = saldo;
    }

    set _conta(conta){
        this.conta = conta;
    }
    get _conta(){
        return this.conta;
    }
    set _nome(nome){
        this.nome = nome;
    }
    get _nome(){
        return this.nome;
    }
    set _saldo(saldo){
        this.saldo = saldo;
    }
    get _saldo(){
        return this.saldo;
    }

    altera(nome){
        this.nome = nome;
    }
    deposito(valor) {
        if (valor > 0) {
   	     this.saldo = this.saldo + valor;
        } else{alert("Deposito precisa ser maior que zero!");}
    }
    saque(valor){
        if (valor > 0) {
   		 this.saldo = this.saldo - valor;
        } else{alert("Saldo zerado");}
}
    print(){
        console.log("Conta: " + this.conta);        
        console.log("Cliente: " + this.nome);
        console.log("Saldo = "+ this.saldo);
    }
}

class Fisica extends ContaCorrente{
    constructor (conta, nome, saldo, cpf){
        super (conta, nome, saldo);
        this.cpf = cpf;
    }
    set _cpf(cpf){
        this.cpf = cpf;
    }
    get _cpf(){
        return this.cpf;
    }
    print (){
        super.print();
        console.log ("CPF: "+ this.cpf);
    }
}

