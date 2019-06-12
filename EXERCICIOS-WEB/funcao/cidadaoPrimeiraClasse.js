// Função em JS é First-Class Object (Citizan)
// Higher-order function 

// Criar de forma literal

function fun1(params) {}

// Armazenar em uma variavel
const fun2 = function() {}

// Armazenar em um array

const array = [function(a, b){return a + b}, fun1, fun2];
console.log(array[0](2,3));

// Armazernar em atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar());

// Passar função como param 
function run (fun){
    fun()
}

run(function() {console.log('ISSSSOOOOOO')});

// Um função pode conter/retornar uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c);
    }
}

soma(2, 3)(4)