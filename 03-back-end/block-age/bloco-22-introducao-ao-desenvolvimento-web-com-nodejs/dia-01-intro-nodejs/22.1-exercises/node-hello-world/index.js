const { question, questionInt } = require('readline-sync');

const name = question('What is your name? ');
const age = questionInt('How old are you? ');

console.log(`Hellow, ${name}! You are ${age} years old!`);

// console.log('Hello, world!');