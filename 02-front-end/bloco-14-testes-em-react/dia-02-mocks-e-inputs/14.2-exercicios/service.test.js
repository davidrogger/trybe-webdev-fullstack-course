const service = require("./service");

describe('Function that generate a random service', () => {
  it('Should be called one time and return 10', () => {
    service.randomservice = jest.fn().mockReturnValue(10);
    const functionResult = service.randomservice();
    expect(service.randomservice).toHaveBeenCalledTimes(1);
    expect(functionResult).toBe(10);
  });
});
describe('Mock the function to a divider function who recive two parameters', () => {
  it('should recive 2 parameters', () => {
    service.randomservice = jest.fn((a, b) => a / b);
    const functionResult = service.randomservice(2, 2);
    expect(service.randomservice).toHaveBeenCalledTimes(1);
    expect(service.randomservice).toHaveBeenCalledWith(2, 2);
    expect(functionResult).toBe(1);
  });
});
describe('Mock the function to a multiplier function who recive three parameters', () => {
  it('should recive 3 parameters and been called 1 time', () => {
    service.randomservice = jest.fn((a, b, c) => a * b * c);
    const functionResult = service.randomservice(2, 2, 2);
    expect(service.randomservice).toHaveBeenCalledTimes(1);
    expect(functionResult).toBe(8);
    expect(functionResult).not.toBe(1)
    expect(functionResult).not.toBe(6)
    service.randomservice.mockRestore();
    service.randomservice = jest.fn((a) => a *2);
    const newResult = service.randomservice(2);
    expect(service.randomservice).toHaveBeenCalledTimes(1);
    expect(newResult).toBe(4);
    expect(newResult).not.toBe(2);
  })
})

describe('Mockando primeira função para ao inves de retornar parametro em caixa alta, retonar em baixa baixa', () => {
  jest.spyOn(service, "upperCaseString").mockImplementation( (a) => a.toLowerCase());
  expect(service.upperCaseString('UPPERCASE')).toBe('uppercase');
  expect(service.upperCaseString).toHaveBeenCalledTimes(1);
 service.upperCaseString.mockRestore();
  expect(service.upperCaseString('lowercase')).toBe('LOWERCASE');
})

