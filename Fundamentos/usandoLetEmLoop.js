for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('Valor de I ao saior do loop é ' + i); 
// ↑ Isso dará erro, pois I não está definido. A variável só está visivel dentro bloco 'for'


const funcs = [];
for(let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}
funcs[2]();
funcs[8]();