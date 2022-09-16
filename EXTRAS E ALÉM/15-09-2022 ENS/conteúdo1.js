/*

FUNÇÕES

Funções são blocos de construção fundamentais em JavaScript. 

Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

De modo geral, função é um "subprograma" que pode ser chamado por código externo (ou interno no caso de recursão) à função. Assim como o programa em si, uma função é composta por uma sequência de instruções chamada corpo da função. Valores podem ser passados para uma função e ela vai retornar um valor.

Em JavaScript, funções são objetos de primeira classe, pois elas podem ter propriedades e métodos como qualquer outro objeto. O que as difere de outros objetos é que as funções podem ser chamados. Em resumo, elas são objetos Function.

Declarando uma função
A definição da função (também chamada de declaração de função) consiste no uso da palavra chave function (en-US), seguida por:

Nome da Função.
Lista de argumentos para a função, entre parênteses e separados por vírgulas.
Declarações JavaScript que definem a função, entre chaves { }.
Por exemplo, o código a seguir define uma função simples chamada square:

function square(numero) {
  return numero * numero;
}

acessar arquivo p1, p2 e p3

Toda função em JavaScript é um objeto Function. Veja Function para informação das propriedades e métodos dos objetos Function. Para retornar um valor diferente do padrão, uma função deve ter uma instrução return que específica o valor a ser retornado. Uma função sem um return retornará um valor padrão.

Os parâmetros de uma função são chamados de argumentos da função. Argumentos são passados para a função por valor. Se uma função muda o valor de um argumento, esta mudança não é refletida globalmente ou na chamada da função. Contudo, referência de objetos são valores também, e eles são especiais: se a função muda as propriedades do objeto referenciado, estas mudanças são visíveis fora da função, como é mostrado no exemplo a seguir:

/* Declare a função 'minhaFunção' */
function minhaFuncao(objeto) {
  objeto.marca = "BMW";
}

/*
 * Declare a variável 'meucarro';
 * crie e inicialize um novo Objeto;
 * atribua referência para 'meucarro'
 */
var meucarro = {
  marca: "VW",
  modelo: "Fusquinha",
  ano: 1968
};

/* Exibe 'VW' */
console.log(meucarro.marca);

/* Passe a referência do objeto para a função */
minhaFuncao(meucarro);

/*
 * Exibe 'BMW' como valor para a propriedade 'marca'
 * do objeto, mudado pela função.
 */
console.log(meucarro.marca);
/*
Há várias maneiras de definir funções:

Declaração de função (Instrução function)
Há um sintaxe especial para declarar funções (veja Instrução function () para detalhes):

function nome([param[, param[, ... param]]]) {
   instruções
}

nome - O nome da função.
param - O nome de um argumento a ser passado para a função.
instruções - As instruções que formam o corpo da função.


*/

/*
Function expression

A palavra-chave function pode ser utilizada para definir uma função dentro de uma expressão
const areaDoRetangulo = function(largura, altura) {
  return largura * altura;
};

console.log(areaDoRetangulo(3, 4));
// expected output: 12

*/