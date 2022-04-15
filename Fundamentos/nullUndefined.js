let valor; //não inicializada
console.log(valor);

valor = null; //ausência de valor
console.log(valor);
//console.log(valor.ToString()); //Isso gera um ERRO!!

const produto = {};
console.log(produto.preco); //Undefined
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //Evite atribuir para 'Undefined'
console.log(!!produto.preco);
console.log(produto);

produto.preco = null; //Sem preço
console.log(!!produto.preco);
console.log(produto);