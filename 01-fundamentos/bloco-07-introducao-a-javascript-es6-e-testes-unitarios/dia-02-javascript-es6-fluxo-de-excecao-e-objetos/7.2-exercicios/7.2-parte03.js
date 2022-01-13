const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


//1- Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

// const newShift = (obj, key, value) => {
//   obj[key] = value;
// }

// newShift(lesson2, 'turno', 'noite');

//2- Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

// const keyList = (obj) => {
//   return Object.keys(obj)
// }

// console.log(keyList(lesson3));

//3- Crie uma função para mostrar o tamanho de um objeto.

// const objtLength = (obj) => {
//   return Object.keys(obj).length;
// }

// console.log(objtLength(lesson3));

//4-Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
// const valueList = (obj) => {
//   return Object.values(obj);
// }

// console.log(valueList(lesson3));

//5- Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});


//6- Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

// const totalStudants = (obj) => {
//   let totalSum = 0;
//   let arrayKeys = Object.keys(obj);  
//   for(index in arrayKeys) {
//     totalSum += obj[arrayKeys[index]].numeroEstudantes;   
//   }
//   return totalSum;
// }

//  console.log(totalStudants(allLessons));

 //7- Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
//  console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

//  const getValueByNumber = (key, index) => {
//   const keyValue = Object.values(key);
//   return keyValue[index];

//  }

//  console.log(getValueByNumber(lesson1, 2));

//8- Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

// const verifyPair = (obj, key, value) => {
//   if(obj[key] === value) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(verifyPair(lesson2,  'turno', 'noite'));

// BONUS!
//1- Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

// const totalStudants = (grade) => {
//   const arrayKeys = Object.keys(allLessons);
//   let watchedMath = 0;
//   for(index in arrayKeys){
//     if(allLessons[arrayKeys[index]].materia === grade) {
//       watchedMath += allLessons[arrayKeys[index]].numeroEstudantes;
//     }
//   }
//   return `Total de alunos que viram ${grade} são ${watchedMath}.`
// }

// console.log(totalStudants('Matemática'));

//2- Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
// EXEMPLO:
//console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */

// const createReport = (obj, who) => {
//   const arrayKeys = Object.keys(obj);
//   const report = {professor: who, aulas: [], estudantes: 0};
//   for(index in arrayKeys) {
//     if(obj[arrayKeys[index]].professor === who) {
//       report.aulas.push(obj[arrayKeys[index]].materia);
//       report.estudantes += obj[arrayKeys[index]].numeroEstudantes;
//     }
//   }
//   return report;
// }

// console.log(createReport(allLessons, 'Maria Clara'));