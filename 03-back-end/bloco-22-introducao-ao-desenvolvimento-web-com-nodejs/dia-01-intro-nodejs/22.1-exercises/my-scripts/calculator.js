const { question, questionInt } = require('readline-sync');

const calculator = (num1, num2, operator) => {
  switch(operator) {
    case "+":
      console.log(`The sum of ${num1} + ${num2} is ${num1 + num2}`);
      break;
    case "-":
      console.log(`The subtraction of ${num1} - ${num2} is ${num1 - num2}`);
      break;
    case "*":
      console.log(`The multiplication of ${num1} * ${num2} is ${num1 * num2}`)
      break;
    case "/":
      console.log(`The division of ${num1} / ${num2} is ${num1 / num2}`)
      break;
    default:
      console.log('Insert a valid operator');
  }
}

console.log('Basic calculator');
const num1 = questionInt('Insert the first number to calculate ');
const operator = question('Insert the operator ');
const num2 = questionInt('Insert the second number ');

calculator(num1, num2, operator);

module.exports = calculator;