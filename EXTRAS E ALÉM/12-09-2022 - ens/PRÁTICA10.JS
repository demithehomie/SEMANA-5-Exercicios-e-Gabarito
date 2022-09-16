/*

OPERADORES LÓGICOS E CONDICIONAIS

Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.


link: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-33.php


*/

function numbers_ranges(x, y) {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) 
        || 
        (x >= 70 && x <= 100 && y >= 70 && y <= 100))
       {
      return true;
       } 
      else 
       {
      return false;
    }
  }
  
  //LEMBRAR DE PERGNTAR NUMEROS

  console.log(numbers_ranges(44, 56)); 
  console.log(numbers_ranges(70, 95));
  console.log(numbers_ranges(50, 89));