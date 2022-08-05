// Entrada
// A entrada é composta por T (1 ≤ T ≤ 100) indicando a quantidade de casos de teste e então, T inteiros N (3 ≤ N ≤ 104), indicando a quantidade de pessoas. A mesa é retangular e haverá pelo menos e no máximo uma pessoa em uma das pontas, isto é, se uma ponta estiver vazia, a outra deve ser ocupada, ou senão, as duas pontas estarão ocupadas, mas o número de pessoas que não estão nas pontas sempre será par. O final da entrada é indicado por T = 0.

// Saída
// Seu programa deverá imprimir a soma da quantidade de pedidos de cada pessoa. Não haverá linha em branco entre os casos de teste.


let T = parseInt(window.prompt('Digite um valor: '));
let N;

//TODO: Complete os espaços em branco com uma possível solução para o desafio

while (T !== 0) {
    for (let i = 1; i <= T; i++) {
        N = parseInt(window.prompt('Digite um valor: '));
        if (N % 2 !== 0)
            console.log((N * 2) - 1);
        else
            console.log((N * 2) - 2);
    }
    T = parseInt(window.prompt('Digite um valor: '));
}