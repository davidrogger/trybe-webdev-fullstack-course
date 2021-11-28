const custoProduto = 10;
const valorVenda = 0;
const qtVenda = 1000;
const custoTotal = custoProduto + (custoProduto*0.2);
const lucro = valorVenda - custoTotal;

if (custoProduto <= 0 || valorVenda <= 0){
  console.log("Por favor insira um valor acima de 0")
} else {
  const lucroTotal = lucro * qtVenda;
  console.log("Seu lucro total sobre "+qtVenda+" produtos é de "+ lucroTotal)
}
