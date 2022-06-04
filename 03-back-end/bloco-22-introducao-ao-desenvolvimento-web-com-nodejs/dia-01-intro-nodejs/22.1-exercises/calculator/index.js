const { question, questionInt } = require('readline-sync');
const calculator = require('./calculator');

console.log('Basic calculator');
const num1 = questionInt('Insert the first number to calculate ');
const operator = question('Insert the operator ');
const num2 = questionInt('Insert the second number ');

calculator(num1, num2, operator);