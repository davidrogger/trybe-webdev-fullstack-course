const newEmployees = require('./8.1-exercicio01');

describe('Testes do primeiro exercicio', () => {
  it('Function objNameEmail is a function', () => {
    expect(typeof newEmployees).toBe('function');
  });  
})