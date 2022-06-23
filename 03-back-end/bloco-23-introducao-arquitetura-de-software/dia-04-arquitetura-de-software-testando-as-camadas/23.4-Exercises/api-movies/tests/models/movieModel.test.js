const { expect } = require('chai');
const sinon = require('sinon');

const MoviesModel = require('../../models/movieModel');

const connection = require('../../models/connection');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{ insertId: 1 }]; // retorno esperado no teste.

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucess', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);
      expect(response).to.be.a('object');
    });
    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);
      expect(response).to.have.have.a.property('id');
    })
  })
});