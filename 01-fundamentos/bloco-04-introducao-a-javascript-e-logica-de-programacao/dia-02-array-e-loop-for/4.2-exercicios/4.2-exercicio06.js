// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumber = 0;
for (let contador = 0; contador < numbers.length; contador += 1){
  if (numbers[contador] % 2 !== 0){
    oddNumber += 1;
  }
}
if (oddNumber > 0) {
  console.log(`Existem ${oddNumber} números ímpares neste array.`)
} else {
  console.log("Nenhum valor ímpar encontrado")
}