class Funcionario{
    constructor(nome, cpf, salario){
        this.nome = nome;
        this.cpf = cpf;
        this.salario = salario;
    }
    imprimeDados(){
        console.log('Nome = ' +this.nome);
        console.log('Cpf = ' +this.cpf);
        console.log('Salario = ' +this.salario);
    }
}
class Gerente extends Funcionario{
    constructor(nome, cpf, salario, numFunc){
        super(nome, cpf, salario);
        this.numFunc = numFunc;
    }
    imprimeDados(){
        super.imprimeDados();
        console.log('Numero de Funcionarios = ' +this.numFunc)
    }
}
let x = new Funcionario('Isadora', 555444333254, 2000);
x.imprimeDados();
let y = new Gerente('Ze', 111222444555, 5000, 10);
y.imprimeDados();