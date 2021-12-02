// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function checkEvenNumbers (vector){
  let evenNumberSave = null;
  for( let indexFather = 0; indexFather < vector.length; indexFather += 1){
    if (vector[indexFather].length > 1){
      for(let indexChild = 0; indexChild < vector[indexFather].length; indexChild += 1){
        if (vector[indexFather][indexChild] % 2 == 0){
          if (evenNumberSave == null){
            evenNumberSave = vector[indexFather][indexChild];
          } else {
          evenNumberSave = `${evenNumberSave}, ${vector[indexFather][indexChild]}`;
          }
        }
      }
    } else {
      if (vector[indexFather] % 2 == 0){
        if (evenNumberSave == 'null'){
          evenNumberSave = vector[indexFather];
        } else {
          evenNumberSave = `${evenNumberSave}, ${vector[indexFather]}`;
        }
      }
    }
  }
  return evenNumberSave;
}





console.log(checkEvenNumbers(vector));
