// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Jaca', 'Acabate', 'Abacaxi'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Pêra', 'Melão', 'Laranja'];

// const fruitSalad = (fruit, additional) => {
//   return [...fruit, ...additional]
// };

// console.log(fruitSalad(specialFruit, additionalItens));


// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };

// const allUserData = { ...user, ...jobInfos };

// const { name, age, nationality, profession, squad, squadInitials } = allUserData;

// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squad}`);

//1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring

// const [ string, functLog ] = saudacoes;

// functLog(string);

// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// [ comida, animal, bebida ] = [bebida, comida, animal];

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares .

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// [,,, ...numerosPares] = numerosPares

// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined . Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian .,

// const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };



// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// const getPosition = (latitude, longitude) => ({
//   latitude,
//   longitude,
// });

// console.log(getPosition(-19.8157, -43.9542));

// const greeting = (user = 'Usuário') => console.log(`Welcome ${user}!`);

// greeting('David'); // Welcome undefined!


// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8, 10));