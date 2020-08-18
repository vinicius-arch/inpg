function op() {
    return nro + 1;
}

try {
    console.log(op());
}

catch(a) {
    console.log('Nome do erro: ' + a.name);
    console.log('Mensagem de erro: ' +a.message);
}