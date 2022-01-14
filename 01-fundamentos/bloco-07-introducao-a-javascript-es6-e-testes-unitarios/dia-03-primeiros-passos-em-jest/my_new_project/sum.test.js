const sum = require('./sum.js');

describe('Requisito 1', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(5, 4)).toBe(9);
  });
  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Teste de é apresentado um erro caso os parâmetros são 4 e "5"', () => {
    expect(() => {sum(4, '5')}).toThrow();
  });
  it('Teste se a mensagem apresentada é "parameters must be numbers" quando realizar a chamada de sum(4, "5")', () => {
    expect(() => {sum(4, '5')}).toThrowError(Error);
  });
});
