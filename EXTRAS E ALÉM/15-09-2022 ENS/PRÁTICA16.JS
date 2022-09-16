/*

----Remover primeiro item do array
É utilizado a função shift, que é uma função própria para remover o primeiro elemento do array com Javascript.

nomes.shift();
console.log(nomes); //["Maria", "Paulo", "José", "Pedro", "Joana"];

----Remover último item do array
Assim como para remover a primeira posição, também tem uma função específica, que é a pop.

nomes.pop();
console.log(nomes); //["João", "Maria", "Paulo", "José", "Pedro"];

Outra forma de remover o último item é forçar o tamanho do array ter um item a menos.
Por exemplo, se um array tem 7 itens, e você forçar o tamanho do array ser 5, será removido os últimos dois itens.
Então para esse exemplo de remover um só:

nomes.length = nomes.length - 1;
console.log(nomes); //["João", "Maria", "Paulo", "José", "Pedro"];

-----Remover item específico
Utilizando o mesmo exemplo, se você quiser procurar por um nome e excluir esse do array, é possível fazer utilizando a função splice em conjunto com o indexOf.

O indexOf retorna a posição de um elemento no array quando o encontra, e o splice serve para alterar um conteúdo de um array, dependendo dos parâmetros passados para ele é possível remover uma quantidade de itens e adicionar novos.

Para este caso, iremos somente remover um e não adicionar nenhum item no array.

nomes.splice(nomes.indexOf("Paulo"), 1);
console.log(nomes); //["João", "Maria", "José", "Pedro", "Joana"];
*/
----Remover itens duplicados de um array
Este é um pouco mais avançado, porém o resultado é interessante, com isso é possível filtrar registros duplicados em um array.

let nomes = ["João", "Maria", "Paulo", "João", "José", "Pedro", "Joana", "João"];
var novoArray = nomes.filter((item, i) => nomes.indexOf(item) === i);
console.log(novoArray); //['João', 'Maria', 'Paulo', 'José', 'Pedro', 'Joana']
/*

let nomes = ["João", "Maria", "Paulo", "João", "José", "Pedro", "Joana", "João"];
var novoArray = nomes.filter((item, i) => nomes.indexOf(item) === i);
console.log(novoArray); //['João', 'Maria', 'Paulo', 'José', 'Pedro', 'Joana']
