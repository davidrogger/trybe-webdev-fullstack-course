const ex01 = require('./8.1-exercicio01')();

describe('Testes do primeiro exercício', () => {
  it('Function newEmployees is a function', () => {
    expect(typeof ex01.newEmployees).toBe('function');
  });
  it('Function emailGenerator is a function', () => {
    expect(typeof ex01.emailGenerator).toBe('function');
  });
  it('emailGenerator should return a object', () => {
    expect(typeof ex01.newEmployees(ex01.emailGenerator)).toBe('object');
  });
});
