function calc(a, b) {
    if( typeof a == 'number' && typeof b == 'number' ){
        return a + b;
    }

    throw new Error('Os parametros precisam ser numeros!');

}

try {
    console.log(calc('oi',2));
}

catch(a) {
    console.log('Nome do erro: ' + a.name);
    console.log('Mensagem de erro: ' +a.message);
}

try {
    console.log(calc(1,2));
    console.log('Deu certo!');
}

catch(a) {
    console.log('Nome do erro: ' + a.name);
    console.log('Mensagem de erro: ' +a.message);
}