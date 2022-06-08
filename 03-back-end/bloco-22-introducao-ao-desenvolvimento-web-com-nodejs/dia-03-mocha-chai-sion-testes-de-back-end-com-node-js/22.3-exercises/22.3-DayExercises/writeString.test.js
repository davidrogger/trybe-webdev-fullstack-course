const { expect } = require('chai');
const { file } = require('chai-files');

const sinon = require('sinon');
const fs = require('fs');
const writeString = require('./writeString');

describe('Testing write file function', () => {

  const fileContent = 'phrase should be inside the file';
  before( () => {
    sinon.stub(fs, 'writeFileSync');
  });
  after(() => {
    fs.writeFileSync.restore();
  });
  it('1 - Should be a function', () => {
    expect(writeString).to.be.a('function');
  });
  describe('2 - Parameter check: ', () => {
    const errorPhrase = 'The function should receive two parameters.';
    it('A - Should receive 2 parameter', () => {
      expect(() => writeString()).to.throw(errorPhrase);
      expect(() => writeString('oneParameter')).to.throw(errorPhrase);
    });
    it('B - Should not throw an error if has two parameters', () => {
      expect(() => writeString('oneParameter', 'twoParameter')).to.not.throw(errorPhrase);
    });    
  });
  describe('3 - Creating the file:', () => {
    
    it('A - Should return an "Ok" and the file should exists', () => {
      const returnFunction = writeString('./test.txt', fileContent);
      expect(file('test.txt')).to.exist;
      expect(file('test.txt')).to.not.equal('bar');
      expect(returnFunction).to.be.equals('ok');
    });
  })

});