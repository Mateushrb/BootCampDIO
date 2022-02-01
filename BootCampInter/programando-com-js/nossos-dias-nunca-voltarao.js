let N = prompt('Valor:');
let frase = 'life is not a problem to be solved';
let novaFrase = '';
for (let i = 0; i < N; i++) {
    novaFrase += frase[i].toUpperCase();
}
console.log(novaFrase);
