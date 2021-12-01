// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

let arrayTest = ['Jose', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggerName (){
  let biggerName = '';
  for (let index = 0; index < arrayTest.length; index += 1){    
    // if (biggerName == 'undefined'){
    //   biggerName = arrayTest[index];
    // }
    if (biggerName.length < arrayTest[index].length){
      biggerName = arrayTest[index];
    }
  }
  console.log(biggerName);
}

biggerName();