// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
function sumAll (n){
  let sum = n;
  for(let index = 1; index < n; index += 1){
    sum = sum + index;
  }
  return sum;  
}
let number = 5;

console.log(sumAll(number));