function calc(a, b) {
    if( typeof a == 'number' && typeof b == 'number' ){
        return a + b;
    }
        throw new Errinho('Os parametros precisam ser numeros!');
}

class Errinho extends Error {
    constructor(message) {            
        super(message);            //usa a propriedade da classe Error
        this.name = 'EntradaIncorreta';
    }
}

try {
    console.log(calc('oi',2));
}

catch(a) {
    console.log('Nome do erro: ' + a.name);
    console.log('Mensagem de erro: ' +a.message);
}

finally{
    console.log('O resultado passou pelo catch');
}

try {
    console.log(calc(1,2));
    console.log('Deu certo!');
}

catch(a) {
    console.log('Nome do erro: ' + a.name);
    console.log('Mensagem de erro: ' +a.message);
}

finally{
    console.log('O resultado NAO passou pelo catch');
}