//par nome/valor
const saudacao = 'Opa'; // contexto léxico 1

function exec(){
    const saudacao = 'sup man'; // contexto léxico 2 
    return saudacao;
}

// Objetos são grupos aninhados de pares nomes/valores
const cliente = {
    nome: 'Luis',
    idade: 20,
    peso: 52,
    endereco:{
        logradouro: 'rua caroen',
        numero: 4
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);