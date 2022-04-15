//Usando o Var - Com o uso do Var não irá retornar um erro, porém o 'console.log('a = ', a)' na linha 2 retornará um valor Undefined
console.log('a = ', a);
var a = 2;
console.log('a = ', a);

//Usando o Let - O Let irá retornar um erro logo de cara ao perceber que a variável 'b' não foi criada antes da linha 7
console.log('b = ', b);
let b = 2;
console.log('b = ', b);

