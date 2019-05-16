const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop() //Massa quebrou o carro
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift() //REMOVE O PRIMEIRO ELEMENTO DO ARRAY
console.log(pilotos);

pilotos.unshift('Hamilton') // ADD UM ELEMENTO NO COMEÇO DO ARRAY
console.log(pilotos);

//Pode add e remover elementos do array

//ADD
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

//Remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos = pilotos.slice(2) // Novo array
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);