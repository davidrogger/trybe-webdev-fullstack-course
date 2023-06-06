function getWeightDefinition(bmi) {
  switch (true) {
    case bmi < 18.5:
      return 'Abaixo do peso (magreza).';
    case bmi >= 18.5 && bmi <= 24.9:
      return 'Peso normal.';
    case bmi > 25 && bmi <= 29.9:
      return 'Acima do peso (sobrepeso).';
    case bmi >= 30 && bmi <= 34.9:
      return 'Obesidade grau I';
    case bmi >= 35 && bmi <= 39.9:
      return 'Obesidade grau II';
    default:
      return 'Obesidade graus III e IV';
  }
}


module.exports = getWeightDefinition
