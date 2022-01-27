let num1 = parseInt(prompt("Primeiro número:"));
let num2 = parseInt(prompt("Segundo número:"));

let frase;

function comparaNumeros(num1, num2) {
    let igual = 'não ';
    if (num1 === num2) {
        igual = '';
    }
    return `Os números ${num1} e ${num2} ${igual}são iguais. Sua soma é `;
}

function somatorio(num1, num2) {
    return num1 + num2
}

function maiorMenor() {
    if (somatorio(num1,num2) < 10) {
        return "que é menor que 10 e menor que 20";
    } else if (somatorio(num1,num2) === 10) {
        return "que é igual a 10 e menor que 20";
    } else if (somatorio(num1,num2) < 20) {
        return "que é maior que 10 e menor que 20";
    }  else if (somatorio(num1,num2) === 20) {
        return "que é maior que 10 e igual a 20";
    }  else {
        return "que é maior que 10 e maior que 20";
    }
}

frase = comparaNumeros(num1, num2) + somatorio(num1, num2) + ", " + maiorMenor();

console.log(frase);