//Calcular a média de todos os números de um array

function mediaArray(ar) {
 var n = ar.length;
 var soma = 0;
 for (var i = 0; i < n; i++) {
 soma += ar[i];
 }
 return soma / n;
}
var ar = [1, 3, 9, 15, 90];
var media = mediaArray(ar);
console.log("A media do Array é:", media);