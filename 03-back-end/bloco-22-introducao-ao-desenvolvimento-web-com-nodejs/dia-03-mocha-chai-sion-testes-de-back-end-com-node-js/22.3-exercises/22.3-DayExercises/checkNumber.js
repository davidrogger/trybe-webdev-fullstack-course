function checkNumber(number) {

  try {
    if(!number && number !== 0) throw new Error('The function should have a number parameter!')
    const baseNumber = 0;
    if(number > baseNumber) return 'positive';
    if(number < baseNumber) return 'negative';
    return 'neutral';
  } catch (err) {
    console.log(`Something went wrong. \n Error: ${err.message}`)
  }

}

checkNumber(0);

module.exports = checkNumber;