const codes = require("./encode_decode");

describe('Encode tests', () => {
  it('test if enconde function exists', () => {
    expect(typeof codes.encode).toBe('function');
  });
  it('test if the vowels "a, e, i, o, u" are converted to "1, 2, 3, 4, 5" ', () => {
    expect(codes.encode('aeiou')).toBe('12345');
  });
  it('test if the phrase "Eu gosto de batata" is converted to "E5 g4st4 d2 b1t1t1" ', () => {
    expect(codes.encode('Eu gosto de batata')).toBe('E5 g4st4 d2 b1t1t1');
  });
  it('test if the phrase has the same length as the original', () => {
    expect(codes.encode('Eu gosto de batata').length).toBe('Eu gosto de batata'.length);
  });
});

describe('Decode tests', () => {
  it('test if Decode function exists', () => {
    expect(typeof codes.decode).toBe('function');
  });
  it('test if the numbers "1, 2, 3, 4, 5" are converted to "a, e, i, o, u" ', () => {
    expect(codes.decode('12345')).toBe('aeiou');
  });
  it('test if the phrase "E5 g4st4 d2 b1t1t1" is converted to "Eu gosto de batata" ', () => {
    expect(codes.decode('E5 g4st4 d2 b1t1t1')).toBe('Eu gosto de batata');
  });
  it('test if the phrase has the same length as the original', () => {
    expect(codes.decode('E5 g4st4 d2 b1t1t1').length).toBe('E5 g4st4 d2 b1t1t1'.length);
  });
});