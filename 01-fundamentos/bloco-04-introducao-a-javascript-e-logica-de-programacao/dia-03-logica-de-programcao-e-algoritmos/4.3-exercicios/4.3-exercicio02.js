// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 5;
let linhaAsterisco = "*";

for (let contador = 0; contador < n; contador += 1) {
  console.log(linhaAsterisco);
  linhaAsterisco = linhaAsterisco+"*" 
  
}