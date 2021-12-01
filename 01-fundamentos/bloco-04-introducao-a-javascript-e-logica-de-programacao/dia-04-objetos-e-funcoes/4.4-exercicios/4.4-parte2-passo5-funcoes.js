// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

let arrayTest = [2, 3, 2, 5, 8, 2];

function repNumber (){
  let mostRep = 0;
  let totalCount = 0;  
  for (let index = 0; index < arrayTest.length; index += 1){    
    let countNumber = 0;
    for( let index2 = 0; index2 < arrayTest.length; index2 += 1){
      if (arrayTest[index] == arrayTest[index2]){
        countNumber += 1;
      }
      if (countNumber > totalCount){
        totalCount = countNumber;        
        mostRep = arrayTest[index];
      }      
    }
  }
  console.log(mostRep);
}

repNumber();