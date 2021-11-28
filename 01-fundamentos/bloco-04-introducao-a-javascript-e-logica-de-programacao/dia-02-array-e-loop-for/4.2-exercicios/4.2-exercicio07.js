// Utilizando for , descubra qual o menor valor contido no array e imprima-o

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minorNumber;
for (let contador = 0; contador < numbers.length; contador += 1){
  if(typeof(minorNumber) !== "number"){
    minorNumber = numbers[contador];
  }
  if (numbers[contador] < minorNumber){
    minorNumber = numbers[contador]
  }
}
console.log("Menor número dentro do array é "+ minorNumber);