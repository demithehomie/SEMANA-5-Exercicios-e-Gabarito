// EXIBIR UM ITEM ESPECÍFICO DE UMA LISTA

let listaDeNomes = ["Demetrius", "Kelly", "Lucas", "Naldin", "Jeffin", "Franciele", "Thomas"]

function nomesDaGalera(param) {
    for (let i = 0; i < param.length; i++){
        console.log(param[i])
    }
}

nomesDaGalera(listaDeNomes)
