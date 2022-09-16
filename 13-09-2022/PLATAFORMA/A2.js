/*

ATIVIDADE 2
Ler 10 números e imprimir quantos são pares e quantos são ímpares. (FOR)

*/


var pares = 0,
    impares = 0;

for(let i = 1; i <= 10; i++){

    let num = Number(prompt("Informe um número: "))

    if( num % 2 == 0){
        pares++
    }else{
        impares++
    }
}
alert(`Total de números pares: ${pares} \n Total de números ímpares: ${impares}`)
