


// Criar uma função para elevar um número ao quadrado
var numero = 10

function aoQuadrado(numero){
    var expressao = numero ** 2
    return console.log(expressao)
}
aoQuadrado(5)

// Criar uma função para calcular a porcentagem de um número

function porcentagem(num, por){
   return console.log((num / 100) * por)
}
porcentagem(150, 10)

// Criar uma função que transforme fahrenheit para celsius

function fpc(c){
    let resultado = (c - 32) / 1.8
    return console.log(resultado.toFixed(2))
}

fpc(33)

// Criar uma função que transforme celsius para fahrenheit

function cpf(f){
    let resultado = (f * 1.8) + 32
    return console.log(resultado.toFixed(2))
}

cpf(18)

