function inc() {
    return i;
}

try {
    console.log(inc());
}

catch(a) {
    console.log('Nome do erro: ' + a.name);
    console.log('Mensagem de erro: ' +a.message);
}