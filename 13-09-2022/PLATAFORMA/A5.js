/*

ATIVIDADE 5
Crie um programa que leia um número do teclado até que encontre um número igual a zero. No final, mostre a soma dos números digitados.(DO...WHILE)

*/

var i = 0
var soma = 0
var a 
do{
    a = Number(prompt("Digite o primeiro numero"))
    soma = soma+a
    alert(`Somatorio atual ${a} + ${i} = ${soma}`)
    
}

while(a !=0)