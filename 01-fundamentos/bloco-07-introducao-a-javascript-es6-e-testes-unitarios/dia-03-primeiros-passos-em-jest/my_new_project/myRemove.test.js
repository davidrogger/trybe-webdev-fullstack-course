const myRemove = require('./myRemove');

describe('Requisitos 2', () => {
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) remove o 3 do array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verificar se a chamada MyRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});