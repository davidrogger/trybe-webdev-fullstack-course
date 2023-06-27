const readline = require('readline-sync');
const bmi = require('./bmi');
const getWeightDefinition = require('./bmiDefinitions');

function main() {
  console.log('Let\'s calculate your bmi');

  console.log('Exemplos height: 1.7, weight: 70\n')
  const height = readline.questionFloat('What\'s your height in meters? ');
  const weight = readline.questionInt('What\' your weight? ');
  const bmiResult = bmi(weight, height)

  console.log('Your BMI is %d\n', bmiResult.toFixed(1));
  console.log(getWeightDefinition(bmiResult), '\n');
}

main();
