let line = prompt().split(' ');
console.log(line)
let tomadasDisponiveis = 0;
line.forEach((t) => {
    tomadasDisponiveis += parseInt(t);
})
console.log(tomadasDisponiveis-3);