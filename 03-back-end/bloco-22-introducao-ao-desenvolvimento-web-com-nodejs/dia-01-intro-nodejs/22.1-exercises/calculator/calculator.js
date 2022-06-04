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

module.exports = calculator;