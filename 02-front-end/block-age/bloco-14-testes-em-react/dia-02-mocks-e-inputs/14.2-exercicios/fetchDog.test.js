const fetchAPI = require('./fetchDog');

describe('Mock the API dogs tests', () => {
  fetchAPI.dogsAPI = jest.fn();  
  it('Should request sucess', async () => {
    fetchAPI.dogsAPI.mockResolvedValue('request sucess');
    
    await fetchAPI.dogsAPI();    
    expect(fetchAPI.dogsAPI).toHaveBeenCalled()
    expect(fetchAPI.dogsAPI).toHaveBeenCalledTimes(1)
    await expect(fetchAPI.dogsAPI()).resolves.toBe('request sucess');
    expect(fetchAPI.dogsAPI).toHaveBeenCalledTimes(2);
  });

  it('Should resquest fail', async () => {
    fetchAPI.dogsAPI.mockReset();
    fetchAPI.dogsAPI.mockRejectedValue('request failed');
    expect(fetchAPI.dogsAPI).toHaveBeenCalledTimes(0);
    await expect(fetchAPI.dogsAPI()).rejects.toBe('request failed');
    expect(fetchAPI.dogsAPI).toHaveBeenCalledTimes(1);
  })
})