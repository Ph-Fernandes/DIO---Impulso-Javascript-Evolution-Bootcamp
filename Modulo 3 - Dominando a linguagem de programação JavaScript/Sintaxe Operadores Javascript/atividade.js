function comprarar (a, b) {
    if (a === b) {
        return `Os nùmeros ${a} e ${b} são iguais.`;
    } else {
        return `Os nùmeros ${a} e ${b} não são iguais.`;
    }
}

function somar (a, b) {
    return a + b;
}

function maiorQueDez(a, b) {
    var soma = somar(a, b)
    if (soma > 10) {
        return `Sua soma é ${soma}, que é maior que 10 e`
    } else if ( soma < 10){
        return `Sua soma é ${soma}, que é menor que 10 e`
    } else {
        return `Sua soma é ${soma}, que é igual a 10 e`
    }
}

function menorQueVinte(a, b) {
    var soma = somar(a, b)
    if (soma > 20) {
        return `maior que 20.`
    } else if ( soma < 20){
        return `menor que 20.`
    } else {
        return `igual a 20.`
    }
}

function principal (a, b) {
    return `${comprarar(a, b)} ${maiorQueDez(a, b)} ${menorQueVinte(a, b)}`
}

console.log(principal(15,10))