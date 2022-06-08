const { expect } = require('chai');
const checkNumber = require('./checkNumber');

describe('Number function test return', () => {
  it('Should have a number as parameter', () => {
    expect(() => checkNumber('1')).to.throw('The function should have a number as parameter!');
  })
  it('Should be string', () => {
    const returnFunction = checkNumber(1);
    expect(returnFunction).to.be.a('string');
  });
  it('Should be "positive" if the number is above 0', () => {
    const returnFunction = checkNumber(1);
    expect(returnFunction).to.be.equals('positive');
  });
  it('Should be "negative" if the number is bellow 0', () => {
    const returnFunction = checkNumber(-1);
    expect(returnFunction).to.be.equals('negative');
  });
  it('Should be "neutral" if the number is 0', () => {
    const returnFunction = checkNumber(0);
    expect(returnFunction).to.be.equals('neutral');
  });
});