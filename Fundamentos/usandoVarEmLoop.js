for(var i = 0; i < 10; i++) {
    console.log(i);
}
console.log('Valor de I ao sair do loop é ' + i);


const funcs = [];
for(var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}
funcs[2]();
funcs[8]();