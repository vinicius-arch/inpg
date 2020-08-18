class Cliente{
    constructor (nome, saldo){
      this.nome = nome;
      this.saldo = saldo;
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
    print(){
      console.log("Cliente: " + this.nome);
      console.log("Saldo = "+ this.saldo);
    }  
    
    }
  
  
  class Fisica extends Cliente{
    constructor (nome, saldo, cpf){
      super (nome, saldo);
      this.cpf = cpf;
    }
    set _cpf(cpf){
      this.cpf = cpf;
    }
    get _cpf(){
      return this.cpf;
    }
    print (){
      console.log("*** Conta Fisica ***");
      super.print();
      console.log ("cpf : "+ this.cpf);
    } 
    altera(tipo, valor){
      switch (tipo){
      case 1:
        this.saldo = this.saldo - valor;
        break;
      case 2:
        this.saldo = this.saldo + valor;
        break;
      default:
        console.log("Opção inválida!")
        break;
      }
    }
  }
  
  
  class Vip extends Fisica{
    constructor (nome, saldo, cpf, bonus){
      super (nome, saldo, cpf);
      this.bonus = bonus;
    }
    set _bonus(bonus){
      this.bonus = bonus;
    }
    get _bonus(){
      return this.bonus;
    }
    print (){
      console.log("*** Conta VIP ***");
      super.print();
      console.log ("Bonus : "+ this.bonus);
    }
    altera(tipo, valor, bonus){
      switch (tipo){
      case 1:
        this.saldo = this.saldo - valor;
        this.bonus = this.bonus - bonus;
        break;
      case 2:
        this.saldo = this.saldo + valor;
        this.bonus = this.bonus + bonus;
        break;
      default:
        console.log("Opção inválida!")
        break;
      }
  }
  }
  
  class Juridica extends Cliente{
    constructor (nome, saldo, cnpj){
      super (nome, saldo);
      this.cnpj = cnpj;
    }
    set _cnpj(cnpj){
      this.cnpj = cnpj;
    }
    get _cnpj(){
      return this.cnpj;
    }
    print (){
      console.log("*** Conta Jurídica ***");
      super.print();
      console.log ("cnpj : "+ this.cnpj);
    }
    altera(tipo, valor){
      switch (tipo){
      case 1:
        this.saldo = this.saldo - valor;
        break;
      case 2:
        this.saldo = this.saldo + valor;
        break;
      default:
        console.log("Opção inválida!")
        break;
      }
  }
  }
  
  vetCliente=[];
  vetFisica=[];
  vetJuridica=[];
  vetVIP=[];
  numCliente=-1;
  
  do{
    console.log('$$$ Banco POO $$$');
    console.log('1. Criar Conta');
    console.log('2. Alterar Saldo');
    console.log('3. Imprimir Conta');
    console.log('4. Sair do Programa');
    opcao = parseInt(prompt('Digite sua opcao:'));
    console.clear();
  
    switch (opcao){
  
      case 1:
        let tipo = parseInt(prompt('Digite o tipo da conta. 1 - Cliente / 2 - Física / 3 - VIP / 4 - Jurídica'
        ));
        console.clear();
        if (tipo == 1){
          let nome = prompt ('Nome: '); 
          let saldo = parseFloat(prompt ('Saldo: '));
          vetCliente.push(new Cliente(nome, saldo));
        }
        if (tipo == 2){
          let nome = prompt ('Nome: ');
          let cpf = parseFloat(prompt ('CPF: '));
          let saldo = parseFloat(prompt ('Saldo: '));
          vetFisica.push(new Fisica(nome, saldo, cpf));
        }
        else if (tipo == 3){
          let nome = prompt ('Nome: ');
          let cnpj = parseFloat(prompt ('CNPJ: '));
          let saldo = parseFloat(prompt ('Saldo: '));
          vetJuridica.push(new Juridica(nome, saldo, cnpj));
        }
        else if (tipo == 4){
          let nome = prompt ('Nome: ');
          let cpf = parseFloat(prompt ('CPF: '));
          let saldo = parseFloat(prompt ('Saldo: '));
          let bonus = parseFloat(prompt ('Bonus: '));
          vetFisica.push(new Vip(nome, saldo, cpf, bonus));
        }
        console.clear();
        break;
  
      case 2:
        let getNome = prompt('Digite o nome do cliente');
        let foundUser = false; 
  
        for (let i = 0; i < vetFisica.length; i++){
          if (getNome == vetFisica[i].nome){
            foundUser = true; 
            tipoOp = parseInt(prompt('Digite o tipo de operação (1 - Retirar / 2 - Depositar'));  
            valorOp = parseInt(prompt('Digite o valor')); 
            vetFisica[i].altera(tipoOp, valorOp);
            console.clear();
          }
        }
        for (let i = 0; i < vetJuridica.length; i++){
          if (getNome == vetJuridica[i].nome){
            foundUser = true; 
            tipoOp = parseInt(prompt('Digite o tipo de operação (1 - Retirar / 2 - Depositar'));  
            valorOp = parseInt(prompt('Digite o valor')); 
            vetJuridica[i].altera(tipoOp, valorOp);
            console.clear();
          }
        }
        for (let i = 0; i < vetVIP.length; i++){
          if (getNome == vetVIP[i].nome){
            foundUser = true; 
            tipoOp = parseInt(prompt('Digite o tipo de operação (1 - Retirar / 2 - Depositar'));  
            valorOp = parseInt(prompt('Digite o valor')); 
            vetVIP[i].altera(tipoOp, valorOp);
            console.clear();
          }
        }
        if (foundUser == false){
          console.log("Nome não cadastrado!");
        }     
        console.clear();
        break;
  
      case 3:
        let getNome2 = prompt('Digite o nome do cliente');
        let foundUser2 = false; 
  
         for (let i = 0; i < vetFisica.length; i++){
          if (getNome2 == vetFisica[i].nome){
            foundUser2 = true;  
            vetFisica[i].print();
          }
        }
  
         for (let i = 0; i < vetJuridica.length; i++){
          if (getNome2 == vetJuridica[i].nome){
            foundUser2 = true;  
            vetJuridica[i].print();
          }
        }
  
         for (let i = 0; i < vetVIP.length; i++){
          if (getNome2 == vetVIP[i].nome){
            foundUser2 = true;  
            vetVIP[i].print();
          }
        } 
        if (foundUser2 == false){
          console.log("Nome não cadastrado!");
        }   
        break;
  
      default:
        console.log('Opção inválida!');
    }
  }while(opcao != 4);