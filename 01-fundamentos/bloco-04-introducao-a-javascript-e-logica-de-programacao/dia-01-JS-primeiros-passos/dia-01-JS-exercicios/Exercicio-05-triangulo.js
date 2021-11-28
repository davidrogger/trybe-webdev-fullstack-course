const num1 = 50;
const num2 = 50;
const num3 = -10;
const total = num1 + num2 + num3;

if (total == 180) {
  console.log("É um triângulo");
}
else if (num1 < 0 && num2 < 0 && num3 < 0){
  console.log("Valores inseridos são invalidos")
}
else {
  console.log("Com esses valores de angulo, não é possivel formar um trangulo");
}
