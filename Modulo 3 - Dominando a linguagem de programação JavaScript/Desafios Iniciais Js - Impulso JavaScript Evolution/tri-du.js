// regras tri-du
// No jogo, cada jogador recebe três cartas. As regras são simples:
    // Um trio (três cartas de mesmo valor) ganha de uma dupla (duas cartas de mesmo valor).
    // Um trio formado por cartas de maior valor ganha de um trio formado por cartas de menor valor.
    // Uma dupla formada por cartas de maior valor ganha de uma dupla formada por cartas de menor valor.

var s = window.prompt('Digite dois numeros: ').split(" ");
let A = parseInt(s[0]);
let B = parseInt(s[1]);
let C;
if(A > B){
    C = A;
}
else if(A == B){
    C = A;
}
else{
    C = B;
}
console.log(C)