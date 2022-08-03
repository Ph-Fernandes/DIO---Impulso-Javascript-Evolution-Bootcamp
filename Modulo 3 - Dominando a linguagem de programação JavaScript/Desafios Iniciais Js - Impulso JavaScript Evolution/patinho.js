// let n = parseInt(gets());

//TODO: Complete os espaços em branco com uma possível solução para o desafio

// Dado de entrada:
// 0
// 1
// 2
// 10000
// -1
// Saída esperada:
// 0
// 0
// 1
// 9999

let n = parseInt(window.prompt('Digite um valor'));

while (n != -1) {
    if (n == 0) {
        console.log(n);
    }
    else {
        console.log(n-1);
    }
    n = parseInt(window.prompt('Digite um valor'));
}
