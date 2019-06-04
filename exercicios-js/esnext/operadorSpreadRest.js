//operador ... rest/spread
//usar o rest como padrão de função

//usar o spread como objeto 
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria'];
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'];
console.log(grupoFinal);