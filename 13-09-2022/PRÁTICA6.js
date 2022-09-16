// Mesma tabuada de 8 utilizando DO-WHILE (FAÇA - ENQUANTO) 

let i = 0
let tabuada

let num = Number(prompt("Digite um número"))

do {
    tabuada = num * i
    console.log(` ${num} x ${i} = ${tabuada} `)
    i++
    
} while(i <=10)