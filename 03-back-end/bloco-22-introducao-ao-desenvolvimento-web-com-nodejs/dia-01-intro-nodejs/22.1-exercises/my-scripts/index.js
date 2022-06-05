const imc = require('./imc');
const { questionFloat } = require('readline-sync');

const weight = questionFloat('Please insert your weight like in this quote "70.0"KG ');
const height = questionFloat('Now insert your height like in this quote "1.70"meters ');

imc(weight, height);

