const { expect } = require("chai");

// empty dummy
const MoviesModel = {
  getById: () => {}
};

const INVALID_ID = 100;
const VALID_ID = 1;

describe('Get a film information from an "id"', () => {
  describe('When is not found any information with that id', () => {    
    it('Should return an "object"', async () => {
      const response = await MoviesModel.getById(INVALID_ID);
      expect(response).to.be.a('object');
    });

    it('Should be an empty "object"', async () => {
      const response = await MoviesModel.getById(INVALID_ID);
      expect(Object.keys(response)).to.have.length(0);
    });
  });

  describe('When the information is get it with sucess', () => {
    const payloadMovie = {
      title: 'Test Title',
      createdBy: 'Test Person',
      releaseYear: 2022,
    };

    
    it('Should return an "object"', async () => {
      const response = await MoviesModel.getById(VALID_ID);
      expect(response).to.be.a('object');
    });
    it('Should have the title, createdBy and releaseYear information', async () => {
      const response = await MoviesModel.getById(VALID_ID);
      expect(response).to.deep.equal(payloadMovie);
    })
  });

});