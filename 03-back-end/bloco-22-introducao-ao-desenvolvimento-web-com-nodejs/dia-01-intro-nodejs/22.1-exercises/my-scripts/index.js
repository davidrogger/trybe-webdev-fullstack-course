const { questionInt } = require('readline-sync');

const scripts = [
  './imc',
  './speed',
  './prize-draw'
];

console.log('Functions avalible');
console.log('0 - IMC calculator');
console.log('1 - AVG car');
console.log('2 - Prize draw');

const answer = questionInt('Which function do you want to use? ');

if( answer === 0 || answer === 1 || answer === 2) {
  const app = require(scripts[answer]);
  app();
} else {
  console.log('Invalid answer');
}