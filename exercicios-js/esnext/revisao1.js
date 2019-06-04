//let e const 
{
    var a = 2;
    let b = 3;
    console.log(b)// o let tem escopo de bloco ou seja ele ele só e "visto" dentro do seu bloco
}
console.log(a);// já o var não ele pode ser visto pelo codigo todo

//template String
const produto = 'Ipad';
console.log(`${produto} é caro!`);

//Destructuring
const [l, e, ...tras] = "Cod3r";// aqui as letras da palavra Code3r são atribuidas as variaveis 'l' para o 'c', 'e' para o 'trans' para o resto
console.log(l, e, tras);

const[x, ,y] = [1, 2, 3]; // se colocarmos um espaço vazio nas variaveis o segundo elemento do arra sera pulado 
console.log(x, y);// mesmo com mais elementos do q variaveis só são imprimidas as primeiros

const {idade:i ,nome} = {nome:'Ana', idade:19}
console.log(idade, nome);