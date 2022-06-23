const { expect } = require('chai');
const sinon = require('sinon');

const MoviesService = require('../../services/moviesServices');
const MoviesModel = require('../../models/moviesModel');

const FOUND_ID = 1;
const NOT_FOUND_ID = 999;

const standardPayloadMovie = {
  title: 'Test Title',
  createdBy: 'Test Person',
  releaseYear: 2022,
};

describe('Testing Service get treatment', () => {
  
  describe('When id is not found', () => {
    before( async () => {
      const response = {};
      sinon.stub(MoviesModel, 'getById').resolves(response);
    });
  
    after(() => {
      MoviesModel.getById.restore();
    })
    it('Should return an object with an error 404, with the message "id x not found"', async () => {
      const response = await MoviesService.getById(NOT_FOUND_ID)
      expect(MoviesModel.getById).to.be.call();
      expect(response).to.deep.equals({ error: { code: 404, message: `ID ${NOT_FOUND_ID} not found` } });
      expect(response).not.to.deep.equals({ error: undefined });
    });
  });
  describe('When the id is found', () => {
    before(async () => {
      const response = standardPayloadMovie;

      sinon.stub(MoviesModel, 'getById').resolves(response);
    });
    after(() => {
      MoviesModel.getById.restore();
    });
    it('Should return an object with film informations', async () => {
      const response = await MoviesService.getById(FOUND_ID);
      expect(MoviesModel.getById).to.be.call();
      expect(response).to.deep.equals(standardPayloadMovie);
    });
  })
});