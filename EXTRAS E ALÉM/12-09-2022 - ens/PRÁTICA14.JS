/*

Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38

Explicações:

Declarar uma data JavaScript : Em JavaScript os objectos de data são baseados num valor temporal que é o número de milissegundos desde 1 de Janeiro de 1970 UTC. É possível declarar uma data das seguintes formas :

nova Data();
nova Data(valor);
nova Data(dateString);
nova Data(ano, mês[, dia[, hora[, minutos[, segundos[, milissegundos]]]]]);
O método getDay() é utilizado para obter o dia da semana para a data especificada de acordo com a hora local, onde 0 representa o domingo. O valor devolvido por getDay() é um número inteiro correspondente ao dia da semana: 0 para o domingo, 1 para a segunda-feira, 2 para a terça-feira, e assim por diante.

O método getHours() é utilizado para obter a hora para uma determinada data, de acordo com a hora local. O valor devolvido por getHours() é um número inteiro entre 0 e 23.

O método getMinutes() é utilizado para obter os minutos na data especificada, de acordo com a hora local. O valor devolvido por getMinutes() é um número inteiro entre 0 e 59.

O método getSeconds() é utilizado para obter os segundos na data especificada, de acordo com a hora local. O valor devolvido por getSeconds() é um número inteiro entre 0 e 59.

AM e PM : AM significa 'ante meridiem', que significa 'antes do meio-dia' em latim, enquanto PM significa 'post meridiem', que significa 'depois do meio-dia' em latim.
Períodos de 12 horas : Actualmente, a maioria dos relógios são relógios de 12 horas - dividem as 24 horas de um dia em dois períodos de 12 horas.
Ante meridiem: Antes do meio-dia - Entre a meia-noite (0:00) e o meio-dia (12:00)
Post meridiem: Depois do meio-dia Entre o meio-dia (12:00) & meia-noite (0:00)

*/

var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);