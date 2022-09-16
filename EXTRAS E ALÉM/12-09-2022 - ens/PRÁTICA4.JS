/*

OPERADORES LÓGICOS

Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

The Math.abs() method returns the absolute value of a number.

link: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-19.php

*/

function testhundred(x) {
    return ((Math.abs(100 - x) <= 20) ||
       (Math.abs(400 - x) <= 20));
  }
  
  console.log(testhundred(10));
  console.log(testhundred(90));
  console.log(testhundred(99));
  console.log(testhundred(199));
  console.log(testhundred(200));

  /*




  */
