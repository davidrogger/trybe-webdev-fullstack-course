const { expect, should } = require('chai');
const sinon = require('sinon');

const MoviesService = require('../../services/moviesServices');
const MoviesController = require('../../controllers/moviesController');

const FOUND_ID = 1;
const NOT_FOUND_ID = 999;

const standardPayloadMovie = {
  title: 'Test Title',
  createdBy: 'Test Person',
  releaseYear: 2022,
};

const NOT_FOUND_ERROR = { code: 404, message: `ID ${NOT_FOUND_ID} not found` };

describe('Testing controller responses', () => {
  describe('When the id is not found', () => {

    const request = {};
    const response = {};
    const next = () => {};

    before( async () => {
      request.params = { id: NOT_FOUND_ID };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesService, 'getById').resolves( { error: NOT_FOUND_ERROR });
    });

    after (() => {
      MoviesService.getById.restore();
    });


    it('Should return a status 404 with a json message "ID X not found"', async () => {
      await MoviesController.getById(request, response, next);
      expect(response.status.calledWith(404)).to.be.equal(true);
      expect(response.json.calledWith({message: `ID ${NOT_FOUND_ID} not found`})).to.be.equal(true);
    });
  });

  describe('When the id is invalid', () => {
    const request = {};
    const response = {};
    const next = () => {};

    before( async () => {
      request.params = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

    });
    it('Should return an json message with an error when the id is missing or invalid', async () => {
      await MoviesController.getById(request, response, next);
      expect(response.status.calledWith(400)).to.be.equal(true);
      expect(response.json.calledWith({ message: 'ID is required' })).to.be.equal(true);
    })
  })
  
  describe('When the id is found', () => {
    const request = {};
    const response = {};
    const next = () => {};

    before(async () => {
      request.params = { id: FOUND_ID };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesService, 'getById').resolves(standardPayloadMovie);
    });

    after(() => {
      MoviesService.getById.restore();
    });


    it('Should return a status 200, with a json with the film information', async () => {
      await MoviesController.getById(request, response, next);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.status.calledWith(404)).not.to.be.equal(true);
      expect(response.json.calledWith(standardPayloadMovie)).to.be.equal(true);

    });
  });
})