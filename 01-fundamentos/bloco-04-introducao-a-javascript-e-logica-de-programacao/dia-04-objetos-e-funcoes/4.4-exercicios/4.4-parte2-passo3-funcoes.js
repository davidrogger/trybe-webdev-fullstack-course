// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .
let arrayTest = [2, 4, 6, 7, 10, 0, -3];

function minorArrayIndex () {
  let minorNumber;
  for (let index = 0; index < arrayTest.length; index += 1){
    if (typeof minorNumber !== 'number'){
      minorNumber = arrayTest[index];
    }
    if (minorNumber > arrayTest[index]){
      minorNumber = arrayTest[index];
    }
  }

  console.log('O menor número', minorNumber,'esta no indice', arrayTest.indexOf(minorNumber));
}

minorArrayIndex();