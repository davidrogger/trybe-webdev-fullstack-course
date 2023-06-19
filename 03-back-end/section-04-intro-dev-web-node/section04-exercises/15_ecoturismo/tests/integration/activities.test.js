const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const fs = require('fs');
const http = require('../../src/assets/httpStatus');
const expected = require('../assets/expectedResponses');
const request = require('../assets/requestsTest');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/app/app');

const activityRoute = '/activities';

describe('Testing route /activites', () => {
  beforeEach(() => {
    sinon.stub(fs.promises, 'writeFile').resolves();
  });
  afterEach(() => sinon.restore());
  describe('Requesting a new post active successfully', () => {
    it('Should respond status 201 with a message "Activity successfully recorded".', async () => {
      const { status, body } = await chai
        .request(app).post(activityRoute).send(request.POST.newActivityBodyTest);

      expect(status).to.be.equal(http.CREATED);
      expect(body.message).to.be.equal(expected.message.createdOK);
    });
    it('Should save the activity in the json file".', async () => {
      await chai
        .request(app).post(activityRoute).send(request.POST.newActivityBodyTest);

      expect(fs.promises.writeFile.calledOnce).to.be.equal(true);
    });
  });
  describe('Bad request a new post activity', () => {
    describe('"Name" field is required and need to have at least 4 characters:', () => {
      it('Should return status 400 with a message "Name field is required"', async () => {
        const { status, body } = await chai
          .request(app).post(activityRoute).send(request.POST.missingNameBodyTest);
        expect(status).to.be.equal(http.BAD_REQUEST);
        expect(body.message).to.be.equal('Name field is required');
      });
      it('Should return status 400 with a message "Name need at least 4 characters"', async () => {
        const { status, body } = await chai
          .request(app).post(activityRoute).send(request.POST.badNameBodyTest);
        expect(status).to.be.equal(http.BAD_REQUEST);
        expect(body.message).to.be.equal('Name need at least 4 characters');
      });
    });

    describe('"Price" field is required and need to be a number equal or above 0', () => {
      it('Should return status 400 with a message "Price field is required"', async () => {
        const { status, body } = await chai
          .request(app).post(activityRoute).send(request.POST.missingPriceBodyTest);
        expect(status).to.be.equal(http.BAD_REQUEST);
        expect(body.message).to.be.equal('Price field is required');
      });
      it('Should return status 400 with a message "Price need to be a number equal or above zero"', async () => {
        const { status, body } = await chai
          .request(app).post(activityRoute).send(request.POST.badPriceBodyTest);
        expect(status).to.be.equal(http.BAD_REQUEST);
        expect(body.message).to.be.equal('Price need to be a number equal or above 0');
      });
    });

    describe('"Description" field is required and need other 3 fields that are required as well', () => {});
  });
});
