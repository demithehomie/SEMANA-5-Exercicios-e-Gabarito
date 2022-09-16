
/*
ATIVIDADE 3
Faça um programa que receba a idade de uma pessoa e mostre na saída em qual categoria ela se encontra:
10-14 infantil
15-17 juvenil
18-25 adulto
*/


var a = Number(prompt("Digite sua idade"))

 if( a < 15 ){
    alert(`Vc é uma criança `)
}
 if(a >= 15 && a < 18 ){
    alert(`Vc é um Adolecente `)
}
 if(a >= 18 )
 {alert(`Vc é um Adulto `)
}
 