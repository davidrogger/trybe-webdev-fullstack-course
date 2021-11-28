const xadrez = "R";

switch (xadrez.toLowerCase()) {
  case "peao":
    console.log("Anda somente uma casa para frente ou na diagonal");
    break;
  case "torre":
    console.log("Pode andar sem limite de casa, desde que não tenha obstaculos, na reta, traseira ou laterais");
    break;
  case "cavalo":
    console.log("Sua movimentação é em forma de L");
    break;
  case "bispo":
    console.log("Pode andar sem limite de casa, desde que não tenha obstaculos, na Diagonal");
    break;
  case "rainha":
    console.log("Pode andar na diagonal e lados sem limite de casas");
    break;
  case "rei":
    console.log("Pode andar apenas uma casa, em qualquer direção")
    break;
  default:
    console.log("Por favor coloque uma peça valida.")
}