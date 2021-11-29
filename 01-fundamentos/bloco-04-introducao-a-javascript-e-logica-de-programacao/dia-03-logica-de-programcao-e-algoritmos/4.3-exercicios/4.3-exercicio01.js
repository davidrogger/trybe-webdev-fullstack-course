// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 1;

for (let contador = 0; contador < n; contador += 1) { //será responsavel pela quantidade de linha que será criado, no caso relativo a variavel n.
  let linhaAsterisco = "*"; //criação da variavel ja com a string inserida
  for (let contador2 = 1; contador2 < n; contador2 += 1){ //responsavel pela concatenação dos asteriscos dentro da linha apresentada contador começa do 1, pois a primeira linha ja possui o primeiro asterisco.
    linhaAsterisco = linhaAsterisco+"*";    
  }
  console.log(linhaAsterisco)
}