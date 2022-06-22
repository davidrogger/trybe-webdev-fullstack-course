const { expect } = require('chai');

// empty dummy
const MoviesService = {
  getById: () => {}
};

const TEST_ID = 1;

const standardPayloadMovie = {
  title: 'Test Title',
  createdBy: 'Test Person',
  releaseYear: 2022,
};

describe('Testing Service get treatment', () => {
  describe('When id is invalid', () => {
    it('Should return an object with an error when the id is "undefined" with a message "id is required"', async () => {
      const response = await MoviesService.getById()
      expect(response).to.be.equals({ error: { message: 'id is required' } });
    });
    it('Should return an object with an error when the id is invalid with a message "id should be a number"', async () => {
      const response = await MoviesService.getById('oi')
      expect(response).to.be.equals({ error: { message: "id should be a number"} });
    });
    describe('When the id is valid', () => {
      it('Should return an object with film informations', async () => {
        const response = await MoviesService.getById(TEST_ID);
        expect(response).to.be.a('object');
        expect(response).to.deep.equals(standardPayloadMovie);
      });
    })
  })
});