class Socio{
    constructor(nome,id,data){
        this.nome = nome;
        this.id = id;
        this.data = data;
    }

    altera(nome){
        this.nome = nome;
    }

    print(){
        console.log(" # Classe Sócio #");
        console.log("Nome: " +this.nome);
        console.log("ID: " +this.id);
        console.log("Data de Associação: " +this.data);
    }
}


class Dependente extends Socio{
    constructor(nome,id,data,num){
        super(nome,id,data);
        this.num = num;
    }

    altera(nome){
        super.altera(this.nome);
    }

    altera(num){
        this.num = num;
    }

    print(){
        console.log(" # Classe Dependente estendida de Socio # ")
        super.print();
    }
}


vetorSocio=[];
numSocio=-1;

vetorDep=[];
numDep=-1;


do{
    alert("Programa de Socios e Dependentes");
    alert("1. Criar Sócio\n" + "2. Alterar nome\n" + "3. Alterar numero de dependentes\n" + "4. Sair ~");

    opcao = parseInt(prompt("Digite sua opção"));

    switch (opcao){
        case 1:    
            alert("Criar Sócio");
            nom = prompt("Nome");
            ida = prompt("ID");
            dat = prompt("Data de Associação")
            
            numSocio++;
            vetorSocio[numSocio] = new Socio(nom,ida,dat);
            //nesse caso, o primeiro sócio terá a posição zero

            dep = parseInt(prompt("Possui dependentes?\n\n" + "1. Sim\n" + "2. Nao"));
            if(dep == 1){
                qtd = parseInt(prompt("Quantos?"));
                for(cont=0;cont<qtd;cont++){
                    nom_dep = prompt("Nome");
                    ida_dep = prompt("ID");
                    dat_dep = prompt("Data de Associação")
                    numDep++;
                    vetorDep[numDep] = new Dependente(nom_dep,ida_dep,dat_dep);
                    //nesse caso, cada dependente terá uma posição no vetor
            }
        }

        case 2:
            alert("Alteração de cadastro");
            tipo_modificacao = parseInt(prompt("Deseja alterar o nome ou numero dos dependentes?\n" + "1. Nome\n" + "2. Numero"));

            if(tipo_modificacao == 1){
                nome_socio = prompt("Digite o nome do Sócio principal");

            }

            
//procurar formas de nao percorrer todo o array
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

    }
   

}while(opcao != 4);

