// Uma partida, com dois jogadores, possuem as seguintes regras para se definir um vencedor:

// Ataque Aéreo vs. Pedra: Neste caso, o jogador com o Ataque Aéreo derrota o jogador com a Pedra, por razões óbvias.
// Pedra vs. Papel: Neste caso, o jogador com a Pedra derrota o com Papel, porque a Pedra machuca muito mais.
// Papel vs. Ataque Aéreo: Aqui o Ataque Aéreo ganha, porque Ataque Aéreo sempre ganha e o Papel é patético.
// Papel vs. Papel: Nesta variação, ambos os jogadores ganham, porque o Papel é inútil e ninguém que enfrenta o Papel pode perder.
// Pedra vs. Pedra: Para este caso não há ganhador, porque depende do que os jogadores decidem fazer com a Pedra e normalmente não fazem nada.
// Ataque Aéreo vs. Ataque Aéreo: Quando isto acontece, todos os jogadores perdem, devido a Aniquilação Mútua.
// Agora desenvolva um programa que, dada as escolhas de dois jogadores, informe quem venceu o jogo.


 // ATAQUE = vence contra pedra e papel
 // PEDRA = vence contra papel e e empata contra pedra
 // PAPEL = ganha contra ele mesmo

 let N = parseInt(window.prompt('numero: '));
 let jogador1, jogador2;
 for (let i = 0; i < N; i++) {
     jogador1 = window.prompt('valor1: ');
     jogador2 = window.prompt('valor2: ');
             
 //TODO: Complete os espaços em branco com uma possível solução para o desafio
 
     if(jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "ATAQUE")
         console.log("Aniquilacao mutua");
     else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PAPEL")
         console.log("Ambos venceram");
     else if (jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "PEDRA" || jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "PAPEL") console.log("Jogador 1 venceu");
     else if (jogador2.toUpperCase() === "ATAQUE" && jogador1.toUpperCase() === "PEDRA" || jogador2.toUpperCase() === "ATAQUE" && jogador1.toUpperCase() === "PAPEL") console.log("Jogador 2 venceu");
     else if (jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "PAPEL") console.log("Jogador 1 venceu");
     else if (jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "ATAQUE") console.log("Jogador 2 venceu");
     else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "ATAQUE") console.log("Jogador 2 venceu");
     else if (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PEDRA") console.log("Jogador 2 venceu");
     else if (jogador2.toUpperCase() === "PEDRA" && jogador1.toUpperCase() === "PAPEL") console.log("Jogador 2 venceu");
     else if (jogador2.toUpperCase() === "PEDRA" && jogador1.toUpperCase() === "ATAQUE") console.log("Jogador 1 venceu");
     else if (jogador2.toUpperCase() === "PAPEL" && jogador1.toUpperCase() === "ATAQUE") console.log("Jogador 1 venceu");
     else if (jogador2.toUpperCase() === "PAPEL" && jogador1.toUpperCase() === "PEDRA") console.log("Jogador 1 venceu");
     else console.log("Sem ganhador");
 }

// JOGADOR1 - ATAQUE = ATAQUE, PEDRAM, PAPEL *
//          - PEDRA = PEDRA, PAPEL, ATAQUE  
//          - PAPEL = PAPEL, PEDRA ATAQUE

// JOGADOR2 - ATAQUE = ATAQUE, PEDRAM, PAPEL
//          - PEDRA = PEDRA, PAPEL, ATAQUE
//          - PAPEL = PAPEL, PEDRA ATAQUE


// Dado de entrada:
// 9
// Ataque
// Pedra
// Pedra
// Ataque
// Pedra
// Papel
// Papel
// Pedra
// Ataque
// Papel
// Papel
// Ataque
// Papel
// Papel
// Pedra
// Pedra
// Ataque
// Ataque
// Saída esperada:
// Jogador 1 venceu
// Jogador 2 venceu
// Jogador 1 venceu
// Jogador 2 venceu
// Jogador 1 venceu
// Jogador 2 venceu
// Ambos venceram
// Sem ganhador
// Aniquilacao mutua

// Sua Saída:
// Jogador 1 venceu
// Sem ganhador
// Jogador 1 venceu
// Jogador 2 venceu

