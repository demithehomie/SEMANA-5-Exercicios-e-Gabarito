/*

OPERADORES LÓGICOS + CONDICIONAIS

Write a JavaScript program to create a new string adding "Java" in front of a given string. If the given string begins with "Java" then return the original string.

link: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-21.php

*/

function string_check(str1) {
  if (str1 === null || str1 === undefined || str1.substring(0, 4) === 'Java') 
  {
    return str1;
  }
  return "Java"+str1;
}

console.log(string_check("Javascript"));
console.log(string_check("script"));

/*

O método substring() extrai caracteres, entre dois índices (posições), de uma corda, e devolve o substring.

O método substring() extrai caracteres do início ao fim (exclusivo).

O método substring() não altera a cadeia de caracteres original.

Se o início for maior que o fim, os argumentos são trocados: (4, 1) = (1, 4).

Valores iniciais ou finais inferiores a 0, são tratados como 0.

*/