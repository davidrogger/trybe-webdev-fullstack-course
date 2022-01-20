// const numbers = [5, 10, 3, 11, 55, 7];
// let biggestNumber;
// for(let indexNumber = 0; indexNumber < numbers.length; indexNumber += 1) {
//   if (!biggestNumber || biggestNumber < numbers[indexNumber]) {
//     biggestNumber = numbers[indexNumber];
//   }
// }

// console.log(biggestNumber);

// const getBiggest = (biggest, number) => ((biggest > number) ? biggest : number);

// const bigger = numbers.reduce(getBiggest, 100);

// console.log(bigger);

// const numbers = [17, 18, 19, 23, 53, 4, 5, 76, 20, 23, 54, 21];

// const reduceSumEvenNumbers = (result, number) => {
//   if (number % 2 === 0) {
//     return result + number;
//   }
//   return result;
// }

// const sumEvenNumbers = numbers.reduce(reduceSumEvenNumbers, 0);

// console.log(sumEvenNumbers);

// const estudantes = [
//   {
//     nome: 'Jorge',
//     sobrenome: 'Silva',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 67 },
//       { name: 'Português', nota: 79 },
//       { name: 'Química', nota: 70 },
//       { name: 'Biologia', nota: 65 },
//     ],
//   },
//   {
//     nome: 'Mario',
//     sobrenome: 'Ferreira',
//     idade: 15,
//     turno: 'Tarde',
//     materias: [
//       { name: 'Matemática', nota: 59 },
//       { name: 'Português', nota: 80 },
//       { name: 'Química', nota: 78 },
//       { name: 'Biologia', nota: 92 },
//     ],
//   },
//   {
//     nome: 'Jorge',
//     sobrenome: 'Santos',
//     idade: 15,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 76 },
//       { name: 'Português', nota: 90 },
//       { name: 'Química', nota: 70 },
//       { name: 'Biologia', nota: 80 },
//     ],
//   },
//   {
//     nome: 'Maria',
//     sobrenome: 'Silveira',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 91 },
//       { name: 'Português', nota: 85 },
//       { name: 'Química', nota: 92 },
//       { name: 'Biologia', nota: 90 },
//     ],
//   },
//   {
//     nome: 'Natalia',
//     sobrenome: 'Castro',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 70 },
//       { name: 'Português', nota: 70 },
//       { name: 'Química', nota: 60 },
//       { name: 'Biologia', nota: 50 },
//     ],
//   },
//   {
//     nome: 'Wilson',
//     sobrenome: 'Martins',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 80 },
//       { name: 'Português', nota: 82 },
//       { name: 'Química', nota: 79 },
//       { name: 'Biologia', nota: 75 },
//     ],
//   },
// ];

// const biggestGrade = (biggerGrade, grade) => biggerGrade.nota > grade.nota ? biggerGrade : grade;

// const betterStudantGrade = (array) => {
//   return array.map((studant) => ({ name: studant.nome, materia: studant.materias.reduce(biggestGrade).name })); 
  
// };

// console.log(betterStudantGrade(estudantes));

// const numbers = [2, 3, 10, 15];

// console.log(numbers.reduce((accumulator, itemValue) => accumulator + itemValue, 0))


const numbers = [5, 10, 15];

const numberMult2 = (number) => {
  console.log(number);
}

numbers.forEach(numberMult2);

