// tagged template - processa a template dentro de uma função
function tag(partes, ...valores){
    console.log(partes);
    console.log(valores);
    return 'Outra sting';
}

const aluno = 'Gui';
const situacao = 'Aprovado';
console.log(tag `${aluno} está ${situacao}.`)