// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Jaca', 'Acabate', 'Abacaxi'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Pêra', 'Melão', 'Laranja'];

// const fruitSalad = (fruit, additional) => {
//   return [...fruit, ...additional]
// };

// console.log(fruitSalad(specialFruit, additionalItens));


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const allUserData = { ...user, ...jobInfos };

const { name, age, nationality, profession, squad, squadInitials } = allUserData;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squad}`);