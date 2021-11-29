// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let contador = 0; contador < numbers.length; contador += 1){
  soma += numbers[contador]
}
let mediaNumbers = soma/numbers.length
console.log(`Média de todo conteúdo do Arrays é ${mediaNumbers}`);