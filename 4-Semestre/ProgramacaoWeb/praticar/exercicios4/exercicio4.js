function msg() {
    let nome = document.getElementById('camponome').value
    let sobrenome = document.getElementById('camposobrenome').value

    let node = document.createElement("LI") //criando o elemento <li>
    let textnode = document.createTextNode(nome +' '+ sobrenome) //criando o conteúdo
    node.appendChild(textnode) //colocando conteúdo dentro do elemento <li>
    document.getElementById('saida').appendChild(node)
}

function limpar(){
    document.getElementById('camponome').value = ''
    document.getElementById('camposobrenome').value = ''
    document.getElementById('saida').innerHTML = ''
}