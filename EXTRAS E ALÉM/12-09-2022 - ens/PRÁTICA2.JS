/*

OPERADORES MATEMÁTICOS

Write a JavaScript program to convert temperatures to and from celsius, fahrenheit

JavaScript: Fahrenheit e Temperaturas Centígradas:

Fahrenheit e centígrado são duas escalas de temperatura em uso hoje em dia. A escala Fahrenheit foi desenvolvida pelo físico alemão Daniel Gabriel Fahrenheit . Na escala de Fahrenheit, a água congela a 32 graus e ferve a 212 graus.

A escala centígrada, também chamada escala Celsius, foi desenvolvida pelo astrónomo sueco Andres Celsius. Na escala centígrada, a água congela a 0 graus e fervura a 100 graus. A fórmula de conversão do grau centígrado para Fahrenheit é:

C = (5/9) * (F - 32)
onde F é a temperatura Fahrenheit. Também pode utilizar esta página Web para converter as temperaturas Fahrenheit em graus centígrados. Basta introduzir uma temperatura Fahrenheit na caixa de texto abaixo, depois clicar no botão Converter.

LINK: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-11.php

*/

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + Math.round(cToFahr * 100) / 100  + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + Math.round(fToCel * 100) / 100  + ' \xB0C.';
    console.log(message);
} 

cToF(Math.round(71 * 100) / 100);
fToC(Math.round(160 * 100) / 100);

/*

Explicação:

Para uma conversão exacta (Fahrenheit para Celsius / Celsius para Fahrenheit), podem ser aplicadas as seguintes fórmulas:

Fahrenheit para Celsius : (°F - 32) ÷ 1,8 = °C
Celsius a Fahrenheit : (°C × 1,8) + 32 = °F

Uma conversão aproximada entre graus Celsius e graus Fahrenheit é a seguinte :

Fahrenheit para Celsius : Subtrair 30 e reduzir para metade o número resultante.
Celsius para Fahrenheit : Duplicar o número e adicionar 30.

*/
