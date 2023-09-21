const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/models/connection');
const { mockPassengers } = require('../mockData');

describe('Testing route /passengers', function () {
  beforeEach(function () {
    jest.restoreAllMocks();
  });

  it('Should return all passengers', async function () {
    const mockConnection = jest
      .spyOn(connection, 'execute')
      .mockResolvedValue([mockPassengers, []]);

    const { status, body } = await request(app).get('/passengers');

    expect(status).toBe(200);
    expect(mockConnection).toHaveBeenCalled();
    expect(body.passengers).toEqual(mockPassengers);
  });
});