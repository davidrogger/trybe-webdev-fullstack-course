// Faça um programa que diz se um número definido numa variável é primo ou não.

let n = 8;
let primoCheck = 1;

for (let index = 2; index <= n; index += 1){
  if (n % index === 0){
    primoCheck += 1;
  }
}
if (primoCheck === 2) {
  console.log(`O número ${n} é primo!`)
} else {
  console.log(`O número ${n} NÃO É primo!`)
}