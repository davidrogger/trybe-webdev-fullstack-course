// Agora inverta o lado do triângulo.

let n = 5;
let linhaAsterisco = "";

let meioTriangulo = (n + 1) / 2;
let controlEsquerdo = meioTriangulo;
let controlDireito = meioTriangulo;

for (let contadorLinha = 0; contadorLinha <= meioTriangulo; contadorLinha += 1) {
  for (let paraLinha = 0; paraLinha <= n; paraLinha += 1){
    if (paraLinha > controlEsquerdo && paraLinha < controlDireito){
      linhaAsterisco = linhaAsterisco + "*";
    } else {
      linhaAsterisco = linhaAsterisco + " ";
    }
  }
  console.log(linhaAsterisco);
  linhaAsterisco = "";
  controlDireito += 1;
  controlEsquerdo -= 1;
}