const salario = 3000;


if (salario <= 1556.94 && salario > 0) {
  var salarioComINSS = salario - (salario * 0.08)
} else if (salario >= 1556.95 && salario <= 2594.92){
  var salarioComINSS = salario - (salario * 0.09)
} else if (salario >= 2594.93 && salario <= 5189.82) {
  var salarioComINSS = salario - (salario * 0.11)
} else if (salario > 5189.82){
  var salarioComINSS = salario - 570.88
} else {
  console.log("Insira um valor acima de 0")
}

if (salarioComINSS <= 1903.98){
  var irSobreSalario = 0; //insento
} else if (salarioComINSS >= 1903.99 && salarioComINSS <= 2826.65){
  var irSobreSalario = (salarioComINSS * 0.075) - 142.80;
} else if (salarioComINSS >= 2826.66 && salarioComINSS <= 3751.05){
  var irSobreSalario = (salarioComINSS * 0.15) - 354.80;
} else if (salarioComINSS >= 3751.06 && salarioComINSS <= 4664.68){
  var irSobreSalario = (salarioComINSS * 0.225) - 636.13;
} else {
  var irSobreSalario = (salarioComINSS * 0.275) - 869.36;
}

const resultado = salarioComINSS - irSobreSalario;

if (irSobreSalario == 0) {
  console.log("Você é insento de IR, seu salário líquito apenas com INSS é de "+resultado)
}else {
  console.log("Valor liquido descontando INSS e IR é de " +resultado)
}