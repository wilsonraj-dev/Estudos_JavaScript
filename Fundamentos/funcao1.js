//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3);
imprimirSoma(2); //NaN
imprimirSoma();  //NaN

//Função com retorno
function soma(a, b = 0) {
    return a + b;
}
console.log(soma(3, 5));
console.log(soma(3));
console.log(soma()); //NaN