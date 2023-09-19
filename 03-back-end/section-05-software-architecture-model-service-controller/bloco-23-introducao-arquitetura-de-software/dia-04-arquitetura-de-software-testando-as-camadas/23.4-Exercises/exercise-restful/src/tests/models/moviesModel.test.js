const { expect } = require("chai");
const sinon = require('sinon');

// application functions
const connection = require('../../models/connection');
const MoviesModel = require('../../models/moviesModel');

const TEST_ID = 1;

const dbPayloadMovie = {
  title: 'Test Title',
  created_by: 'Test Person',
  release_year: 2022,
};

const standardPayloadMovie = {
  title: 'Test Title',
  createdBy: 'Test Person',
  releaseYear: 2022,
};

describe('Get a film information from an "id"', () => {
  describe('When is not found any information with that id', () => {    

    before( async () => {
      const execute = [[]];
      sinon.stub(connection, 'execute').resolves(execute);
    });

    after( async () => {
      connection.execute.restore();
    });

    it('Should return an empty "object"', async () => {
      const response = await MoviesModel.getById(TEST_ID);
      expect(Object.keys(response)).to.have.length(0);
    });
  });

  describe('When the information is get it with sucess', () => {

    before( async () => {
      const execute = [[dbPayloadMovie]];
      sinon.stub(connection, 'execute').resolves(execute);
    });

    after( async () => {
      connection.execute.restore();
    });

    it('Should return an object with keys "title", "createdBy" and "releaseYear".', async () => {
      const response = await MoviesModel.getById(TEST_ID);
      expect(response).to.deep.equal(standardPayloadMovie);
      expect(response).not.to.deep.equal(dbPayloadMovie);
    });
  });

});