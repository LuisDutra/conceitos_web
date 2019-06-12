// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);// O segundo parametro fica como undefined e o resultado sai como not a number(NaN)
imprimirSoma(2, 10, 4, 5, 7);// Somente os dois primeiro parametros são pegos o resto é ignorado e não apresenta erro 
imprimirSoma();// Restorna NaN e não apresenta erro

//função com retorno
function soma(a, b = 1) {
    return a + b;
}

console.log(soma(2,3));
console.log(soma(2));
console.log(soma());