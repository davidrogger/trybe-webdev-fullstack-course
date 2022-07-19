const area = require('./area');
const mass = require('./mass');
const capacity = require('./capacity');
const volume = require('./volume');
const lengthh = require('./length');

interface conversor {
  units: string[],
  func: any,
}

const options: optionsList = {
  area,
  mass,
  capacity,
  volume,
  lengthh,
};

interface optionsList {
  area: conversor,
  mass: conversor,
  capacity: conversor,
  volume: conversor,
  lengthh: conversor,
}

const { keyInSelect, questionFloat, question } = require('readline-sync');

function exec() {
  try {
    const optionsKeys = Object.keys(options);
    const choiceConvertion: string = optionsKeys[keyInSelect(optionsKeys, 'Choice a convertion need it: ')]
    if (!choiceConvertion) throw Error('cancelled');
    const value = questionFloat('Type the number to convert ');
    if (!value) throw Error('cancelled');
    const unitsLsit = options[choiceConvertion as keyof typeof options].units
    const base = unitsLsit[keyInSelect(unitsLsit, 'Choice origin of the unit to convert')];
    if (!base) throw Error('cancelled');
    const convertion = unitsLsit[keyInSelect(unitsLsit, 'Choice unit that desire to convert to ')];
    if (!convertion) throw Error('cancelled');
    
    console.log(`The convertion of ${choiceConvertion} of ${value}${base} is ${options[choiceConvertion as keyof typeof options].func(value, base, convertion)}${convertion}`)
  
  } catch({ message }) {
    console.log(`Operation: ${ message }`);
  }
}

exec();