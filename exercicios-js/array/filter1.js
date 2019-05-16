const produtos = [
    {nome:'Notebook', preco: 2499, fragil:true},
    {nome:'Ipad Pro', preco: 4199, fragil:true},
    {nome:'Copo de Vidro', preco: 12.49, fragil:true},
    {nome:'Copo de Plastico', preco: 2499, fragil:false}
]

console.log(produtos.filter(function(p){
    return false;
}))

const carro  = produtos => produtos.preco >= 500;
const fragil = produtos => produtos.fragil;

console.log(produtos.filter(carro).filter(fragil));
