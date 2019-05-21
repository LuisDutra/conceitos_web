require('./global');

console.log(MinhaApp.saudacao());

MinhaApp.nome = 'Falouuuuu';// tomar cuidado quando usar o escopo global pois variaveis podem ser mudadas em qualquer parte do sistem e foderem tudo
console.log(MinhaApp.nome);