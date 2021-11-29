// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 5;

for (let contador = 0; contador < n; contador += 1) { 
  let linhaAsterisco = "";
  for (let contador2 = 0; contador2 < n; contador2 += 1){
    linhaAsterisco = linhaAsterisco+"*";    
  }
  console.log(linhaAsterisco)
}