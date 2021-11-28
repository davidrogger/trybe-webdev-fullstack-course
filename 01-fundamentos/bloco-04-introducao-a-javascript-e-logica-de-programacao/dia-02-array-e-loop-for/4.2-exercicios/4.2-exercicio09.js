// Utilizando for , descubra qual o menor valor contido no array e imprima-o

let numbers = [];
for (let contador = 1; contador <= 25; contador += 1){
  numbers.push(contador);
}
for (let divNumber of numbers) {
  divNumber /= 2;
  console.log(divNumber)
}
