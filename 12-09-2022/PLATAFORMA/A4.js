/*
ATIVIDADE 4
Faça um programa em que permita a entrada de um número qualquer e exiba se este número é par ou ímpar. Se for par exiba também a raiz quadrada do mesmo; se for ímpar exiba o número elevado ao quadrado.

*/

var num = Number(prompt("Digite o numero"))
//var a = Number
if(num % 2 == 0){
    alert(`O número é par!\n E a raiz quadrada de ${num} é ${Math.sqrt(num)} `)
}
else
{
    let quadrado = num*num (alert(`O número é imoar!\n E a seu quadrado é ${num*num} `))
}