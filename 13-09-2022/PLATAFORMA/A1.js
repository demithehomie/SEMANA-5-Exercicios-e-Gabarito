/*

ATIVIDADE 1

Informar todos os números de 1000 a 1999 que quando divididos por 11 obtemos resto = 5. (FOR)

 */

for (let num=1000; num <= 1999; num++)
{
    if (num % 11 == 5) {
        console.log(num);
    }
}