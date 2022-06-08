function checkNumber(number) {

    const validParameter = (!number && number !== 0) || typeof(number) !== 'number';
    if(validParameter) throw new Error('The function should have a number as parameter!')
    const baseNumber = 0;
    if(number > baseNumber) return 'positive';
    if(number < baseNumber) return 'negative';
    return 'neutral';

}

// checkNumber('1');

module.exports = checkNumber;