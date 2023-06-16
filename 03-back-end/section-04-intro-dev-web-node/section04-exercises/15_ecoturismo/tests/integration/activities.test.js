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

describe('Testing route /activites', () => {
  beforeEach(() => {
    sinon.stub(fs.promises, 'writeFile').resolves();
  });
  afterEach(() => sinon.restore());
  describe('When requesting a new post active successfully', () => {
    it('Should respond status 201 with a message "Activity successfully recorded".', async () => {
      const response = await chai.request(app).post('/activities').send(request.POST.newActivityBodyTest);
      expect(response.status).to.be.equal(http.CREATED);
      expect(response.body.message).to.be.equal(expected.message.createdOK);
    });
    it('Should save the activity in the json file".', async () => {
      await chai.request(app).post('/activities').send(request.POST.newActivityBodyTest);
      expect(fs.promises.writeFile.calledOnce).to.be.equal(true);
    });
  });
  describe('When requesting a new post active fail', () => {});
});
