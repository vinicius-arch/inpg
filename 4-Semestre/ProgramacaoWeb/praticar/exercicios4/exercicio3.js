function msg() {
    let nome = document.getElementById('camponome').value
    let sobrenome = document.getElementById('camposobrenome').value
    document.getElementById('saida').innerText = nome +' '+ sobrenome
}

function limpar(){
    document.getElementById('camponome').value = ''
    document.getElementById('camposobrenome').value = ''
    document.getElementById('saida').innerText = ''
}