// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let majorNumber = 0;
for (let contador = 0; contador < numbers.length; contador += 1){
  if (numbers[contador] > majorNumber){
    majorNumber = numbers[contador]
  }
}
console.log("Maior número dentro do array é "+ majorNumber);