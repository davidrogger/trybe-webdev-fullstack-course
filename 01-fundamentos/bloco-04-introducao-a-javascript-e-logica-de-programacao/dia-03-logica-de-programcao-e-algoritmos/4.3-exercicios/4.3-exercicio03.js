// Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let linhaAsterisco = "";
let nPosicao = n;

for (let contador = 0; contador < n; contador += 1) { 
  
  for (let contador2 = 0; contador2 <= n; contador2 += 1){
    if(contador2 < nPosicao){
      linhaAsterisco = linhaAsterisco + " ";
    } else {
      linhaAsterisco = linhaAsterisco + "*";
    }   
  }
  console.log(linhaAsterisco)
  linhaAsterisco = "";
  nPosicao -= 1;
}