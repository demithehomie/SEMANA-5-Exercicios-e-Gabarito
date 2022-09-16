string nome = prompt();
console.log("Nome: ");
var nome = alert();
console.log("Peso: ");
var peso = prompt();
console.log("Altura: ");
var altura = alert();
var imc = peso / (altura * altura);

if (sexo == 'F' && imc < 19.1) {
    alert("Abaixo do peso."); 
    }
    else if (sexo == 'F' && imc <= 25.8) {
    alert("Peso ideal."); 
    }
    else if (sexo == 'F' && imc <= 27.3) {
    alert("Um pouco acima do peso."); 
    }
    else if (sexo == 'F' && imc <= 32.3) {
    alert("Acima do peso ideal.");
    }
    else if (sexo == 'F') { 
    alert("Obeso.");
    }
    else if (sexo == 'M' && imc < 20.7) {
    alert("Abaixo do peso.");
    }
    else if (sexo == 'M' && imc <= 26.4) {
    alert("Peso ideal.");
    }
    else if (sexo == 'M' && imc <= 27.8) {
    alert("Um pouco acima do peso.");
    }
    else if (sexo == 'M' && imc <= 31.1) {
    alert("Acima do peso ideal."); 
    }