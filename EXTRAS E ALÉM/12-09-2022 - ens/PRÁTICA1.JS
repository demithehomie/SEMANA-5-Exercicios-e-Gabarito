/*

OPERADORES LÓGICOS

Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

LINK: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-6.php

*/


function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));

/*

Um ano bissexto é um ano que contém um dia adicional adicionado para manter o ano civil sincronizado com o 
ano astronómico ou sazonal. Porque as estações e eventos astronómicos não se repetem num número inteiro de dias, os calendários que têm o mesmo número de dias em cada ano derivam ao longo do tempo em relação ao evento que o ano é suposto seguir. Ao inserir um dia ou mês adicional no ano, a deriva pode ser corrigida. Um ano que não é um ano bissexto é chamado de ano comum.
Cada ano que é exactamente divisível por quatro é um ano bissexto, excepto para os anos que são exactamente divisíveis por 100, mas estes anos centuriais são anos bissextos se forem exactamente divisíveis por 400. Por exemplo, os anos 1700, 1800, e 1900 não são anos bissextos, mas o ano 2000 é.

Para determinar se um ano é um ano bissexto, siga estes passos :

Passo 1 : Se o ano for igualmente divisível por 4, vá para o passo 2. Caso contrário, vá para o passo 5.
Passo-2 : Se o ano for igualmente divisível por 100, vá para o passo 3. Caso contrário, vá para o passo 4.
Passo 3: Se o ano for igualmente divisível por 400, vá para o passo 4. Caso contrário, vá para o passo 5.
Passo 4 : O ano é um ano bissexto (tem 366 dias).
Passo-5 : O ano não é um ano bissexto (tem 365 dias).


*/