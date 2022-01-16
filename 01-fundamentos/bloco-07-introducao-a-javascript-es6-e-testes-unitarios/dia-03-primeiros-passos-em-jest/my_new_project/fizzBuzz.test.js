const myFizzBuzz = require('./fizzBuzz');

describe('Requisito 3', () => {
  it('Número divisível por 5 e 3 deve retornar fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
  });
  it('Número divisivel apenas por 3 deve retornar fizz', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('Número divisível apenas por 5 deve retornar buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('Numero 2 não é divisivel por 3 nem 5 deve retornar ele mesmo', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  it('Se o num informado não for do tipo número, deve retornar falso', () => {
    expect(myFizzBuzz('2')).toBe(false);
  })
});