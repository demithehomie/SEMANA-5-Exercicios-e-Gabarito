/*

ATIVIDADE 1

Faça um programa que receba três inteiros e diga qual deles é o maior.

*/

    var a = Number(prompt("Digite o primeiro numero"))
    var b = Number(prompt("Digite o primeiro numero"))
    var c = Number(prompt("Digite o primeiro numero"))
 
            if(a>b && b>c )
                {alert(`A ordem é ${a} - ${b} - ${c} `)}
            if(a>b && a>c && c>b )
                {alert(`A ordem é ${a} - ${c} - ${b} `)}
            if(b>a && a>c)
                {alert(`A ordem é ${b} - ${a} - ${c} `)}
            if(b>a && c>a && b>c)
                {alert(`A ordem é ${b} - ${c} - ${a} `)}
            if(c>a && a>b)
                {alert(`A ordem é ${c} - ${a} - ${b} `)}
            if(c>a && b>a && c>b)
                {alert(`A ordem é ${c} - ${b} - ${a} `)}


