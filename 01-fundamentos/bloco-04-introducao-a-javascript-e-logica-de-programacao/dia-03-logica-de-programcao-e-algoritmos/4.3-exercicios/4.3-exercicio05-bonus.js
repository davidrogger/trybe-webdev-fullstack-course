// Agora inverta o lado do triângulo.

let n = 5;
let linhaAsterisco = "";

let meioTriangulo = (n + 1) / 2;
let controlEsquerdo = meioTriangulo;
let controlDireito = meioTriangulo;

for (let contadorLinha = 0; contadorLinha < meioTriangulo; contadorLinha += 1) {
  for (let paraLinha = 0; paraLinha <= n; paraLinha += 1){
    if (paraLinha >= controlEsquerdo && paraLinha <= controlDireito){
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
// GABARITO
// let n = 7;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';
// for (let line = 1; line <= middle; line += 1) {
//   let outputLine = '';
//   for (let col = 1; col <= n; col += 1) {
//     if (col == controlLeft || col == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += ' ';
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }