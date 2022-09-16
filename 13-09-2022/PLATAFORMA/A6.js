/*


ATIVIDADE 6
Escrever um programa que receba vários números inteiros no teclado. E no final imprimir a média dos números múltiplos de 3. Para sair digitar 0(zero).(DO...WHILE)

*/

var media = 0
var numero
var i=0
var m=0
do{
    numero = Number(prompt("Digite o numero"))
    if(numero % 3 == 0  && numero!=0){ i=numero+i; m++}
    media=i/m
    
}
while(numero != 0)
alert(`Media atual ${media}`)
