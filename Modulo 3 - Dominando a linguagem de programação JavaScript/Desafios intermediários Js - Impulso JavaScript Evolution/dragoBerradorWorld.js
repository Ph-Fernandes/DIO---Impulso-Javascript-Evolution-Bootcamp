// Entrada
// A entrada contém vários casos de teste. A primeira linha de cada caso consiste em três inteiros N (1 ≤ N ≤ 100), Amin e Amax (50 ≤ Amin ≤ Amax ≤ 250), o número de visitantes, a altura mínima e máxima em centímetros para andar na montanha-russa, respectivamente.

// As N linhas seguintes contém, cada uma, um número inteiro representando a altura do visitantes, em centímetros.

// Saída
// Para cada caso de teste, imprima uma única linha com o número visitantes que podem passear na montanha-russa.

 

var s = gets().split(" ");

//TODO: Complete os espaços em branco com uma possível solução para o desafio

let n = parseInt(s[0]); // numero de visitante
let min = parseInt(s[1]); // altura minima
let max = parseInt(s[2]); // altura maxima

let altura, conta = 0;
for (let x = 0; x < n; x++) {
    altura = parseInt(window.prompt('Digite uma altura: '))
    if (altura >= min && altura <= max )
        conta++;
}
console.log(conta)