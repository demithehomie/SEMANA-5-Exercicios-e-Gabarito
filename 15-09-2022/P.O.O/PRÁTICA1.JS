//PROGRAMAÇÃO ORIENTADA À OBJETOS

function minhaFuncao(hamburguer){
    hamburguer.marca = "McDonald's"
    hamburguer.modelo = "Big Mac"
    hamburguer.preco = 15.99

}

//console.log(objeto)

var meuLanche = {
    marca: "Burguer King",
    modelo: "Whopper",
    preco: 10.00
}
//console.log(` O meu lanche é o ${meuLanche.modelo}, do restaurante ${meuLanche.marca} do preço de ${meuLanche.preco}`)

//PASSAR A REFERÊNCIA DO OBJETO PARA A FUNÇÃO

minhaFuncao(meuLanche)

console.log(` O meu lanche é o ${meuLanche.modelo}, do restaurante ${meuLanche.marca} do preco ${meuLanche.preco}`)
