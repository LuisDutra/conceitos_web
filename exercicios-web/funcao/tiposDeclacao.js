console.log(soma(3,4));

/*Function declaration(pode ser usado mesmo antes de ser declarada pois 
o interpratador da load nas functions declarations antes de tudo)*/
function soma(x, y){
    return x + y;
}

//Function expression
const sub = function(x, y){
    return x - y;
}

//Named function expression
const mult = function mult(x, y){
    return x * y;
}