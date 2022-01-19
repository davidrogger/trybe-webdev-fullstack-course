const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1921,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947. Dica: use a função find .

// const findByYear = (array, year) => {
//   return array.find((itemValue) => itemValue.author.birthYear === year);
// };

// console.log(findByYear(books, 1947));

// 2 - Retorne o nome do livro de menor nome. Dica: use a função forEach .

// const smallerBookName = (array) => {
//   let smallerName;
//   let smallLength = 100;
//   array.forEach((itemValue) => {
//     if (itemValue.name.length < smallLength) {
//       smallerName = itemValue.name;
//       smallLength = itemValue.name.length;
//     }
//   })
//   return smallerName;
// }

// console.log(smallerBookName(books));

// ============================== GABARITO ====================================
// function smallerName() {
//   let nameBook;
//   books.forEach((book) => {
//     if (!nameBook || book.name.length < nameBook.length) {
//       nameBook = book.name;
//     }
//   });
//   return nameBook;
// }

//3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

// const first26caracters = (array) => {

//   return array.find((itemValue) => itemValue.name.length === 26);
// }

// console.log(first26caracters(books));

//4 - Ordene os livros por data de lançamento em ordem decrescente.

// const crescentOrder = (array) => {
//   return array.sort((a, b) => a.releaseYear - b.releaseYear);
// }

// const decrescentOrder = (array) => {
//   return array.sort((a, b) => b.releaseYear - a.releaseYear);
// }

// console.log(crescentOrder(books))
// console.log(decrescentOrder(books))

//5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

// const centuryXX = (array) => {
//   return array.every((itemValue) => array.author <= 2000 && array.author >= 1901);
// }

// console.log(centuryXX(books));

//6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

// const centuryXVIII = (array) => {
//   return array.some((itemValue) => itemValue.releaseYear >= 1701 && itemValue.releaseYear >= 1800);
// }

// console.log(centuryXVIII(books));

//7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const sameBirth = (array) => {
  return array.every((itemValue) => !array.some((itemValue2) => (itemValue2.author.birthYear === itemValue.author.birthYear) && (itemValue2.author.name !== itemValue.author.name)))
  }


console.log(sameBirth(books));

// ============================== GABARITO ====================================

// function authorUnique() {
//   return books.every((book) => !books.some((bookSome) => (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)));
// }

// console.log(authorUnique());