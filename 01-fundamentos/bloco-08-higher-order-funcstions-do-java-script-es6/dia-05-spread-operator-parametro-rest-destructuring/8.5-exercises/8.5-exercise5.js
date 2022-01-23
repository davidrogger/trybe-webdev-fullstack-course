//5 - Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
// Dica: use array destructuring .

const myList = [1, 2, 3];

// const swap = (array) => {
//  const [first, second, third ] = array;
//   return [third, second, first];
// }

// console.log(swap(myList))


const swap = ([first, second, third]) => [third, second, first];

console.log(swap(myList))
