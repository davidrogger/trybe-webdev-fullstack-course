// forEach
// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach(showEmailList);

//find
//1- Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (arrayNumbers) => {
//   return arrayNumbers.find((itemValue) => itemValue % 5 === 0 && itemValue % 3 === 0);
// }

// console.log(findDivisibleBy3And5(numbers))

//2- Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = (arrayNames) => {
//   return arrayNames.find((itemValue) => itemValue.length === 5);
// }

// // console.log(names[0].length)
// console.log(findNameWithFiveLetters(names));

//3- Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// function findMusic(id) {
//   return musicas.find((itemValue) => itemValue.id === id);
// };

// console.log(findMusic('31031685'));

// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter('J', listNames)); // true
// console.log(verifyFirstLetter('x', listNames)); // false

// const MMORPG = {
//   BDO: 'P2W',
//   LOA: 'BOND+',
//   AA: 'P2W'
// };

// const mmp2w = (obj) => {
//   const areP2w = Object.values(obj).every((game) => game === 'P2W');
//   return areP2w;
// };

// console.log(mmp2w(MMORPG))

//1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return arr.some((arrayValue) => arrayValue === name);
// }

// console.log(hasName(names, 'Jonas'));
// console.log(hasName(names, 'Ana'));

//2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//   return arr.every((itemValue) => itemValue.age >= minimumAge);
// }

// console.log(verifyAges(people, 18));
// console.log(verifyAges(people, 16));

//1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .
// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 10 },
// ];
// const crescentAge = (array) => {
// return array.sort((index1, index0) => index1.age - index0.age);
// }

// const decescentAge = (array) => {
//   return array.sort((index1, index0) => index0.age - index1.age);
// }

// console.log(crescentAge(people));
// console.log(decescentAge(people));
