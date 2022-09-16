//cadeia nomes[2] = {"maria", "joao"} PORTUGOL

//let nomes = ["maria", " joao", 28, true] JS



//nomes.shift(); //REMOVER O PRIMERO ITEM DA LISTA

//nomes.pop(); // REMOVER O ÚLTIMO ITEM DA LISTA


//nomes.length; //MOSTRA O TAMANHO TOTAL DA MINHA LISTA
//nomes.length = nomes.length - 3; // FORÇAR A ELIMINAÇÃO DE ITENS

//let nomes = ["maria", "joao", "paulo", "jose"]

//REMOVER UM ITEM ESPECIFICO 

//indexOf // Retornar a posição de um elemento na lista
//Localizar um elemento na lista

//splice // Alterar o conteúdo da lista, apagando itens individuais ou associados da esquerda pra direita

//nomes.splice(nomes.indexOf("paulo"), 2)

let nomes = ["João", "Maria", "Maria", "Paulo", "João", "José", "Pedro", "João"];

//FILTRAR ITENS DUPLICADOS
var novosNomes = nomes.filter((item) => nomes.indexOf(item) === 3);

var novosNomes2 = nomes.filter((item) => nomes.indexOf(item) === 1);

// 0 -> exibo o primeiro da lista e suas cópias
// 1 - exibo o  segundo item e suas cópias
// 2 - 3 ... 


console.log(`\n [${novosNomes}]  &  \n [${novosNomes2}]`);

