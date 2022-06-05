const speed = require('./speed');
const { questionInt } = require('readline-sync');

console.log('Measuring the car average speed')
const distance = questionInt('What is the traveled distance in meters? ');
const time = questionInt('It took how much time to complete the path in minutes? ');

speed(distance, time);