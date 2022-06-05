const imcCalculation = (weight, height) => {
  const imcResult = weight / (height ^ 2);
  console.log(`With the height of ${height} meters and the weight of ${weight} kilograms your IMC is ${imcResult}`);
  if(imcResult < 18.5) console.log('Your bellow the average weight(thinness).');
  if(imcResult >= 18.5 && imcResult <= 24.9) console.log('Your bellow the average weight.');
  if(imcResult >= 25.0 && imcResult <= 29.9) console.log('Your in the average weight.');
  if(imcResult >= 30.0 && imcResult <= 34.9) console.log('Obesity grade one.');
  if(imcResult >= 35.0 && imcResult <= 39.9) console.log('Obesity grade two.');
  if(imcResult > 40.0) console.log('Obesity grade two and four.');

};

module.exports = imcCalculation;