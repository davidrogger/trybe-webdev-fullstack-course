// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .
let arrayTest = [2, 3, 6, 7, 10, 1];

function majorArrayIndex () {
  let majorNumber = 0;
  for (let index = 0; index < arrayTest.length; index += 1){
   
    if (arrayTest[index] > majorNumber){
      majorNumber = arrayTest[index];
    }    
  }
  console.log('O maior número esta no indice', arrayTest.indexOf(majorNumber));
}

majorArrayIndex();