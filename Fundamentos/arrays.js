const valores = [7.7, 8.8, 6.3, 9.2];
console.log(valores[0], valores[2]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length); //Mostra a quantidade de valores contidos no Array

valores.push({id: 3}, false, null, 'teste'); //Adiciona novos valores ao Array
console.log(valores);

console.log(valores.pop()); //Retira o último do valor do array e retorna ele 

delete valores[0];
console.log(valores);

console.log(typeof valores);