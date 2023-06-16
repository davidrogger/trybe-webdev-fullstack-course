const chai = require('chai');
const chaiHttp = require('chai-http');
const http = require('../../src/assets/httpStatus');
const expected = require('../assets/expectedResponses');
const request = require('../assets/requestsTest');

chai.use(chaiHttp);

const { expect } = chai;

const app = null; // not implemented yet

describe('Testing route /activites', () => {
  describe('When requesting a new post active successfully', () => {
    it(
      'Should respond status 201 with a message "Activity successfully recorded".',
      async () => {
        const response = await chai.request(app).post('/activities', request.POST.newActivityBodyTest);
        expect(response.status).to.be.equal(http.CREATED);
        expect(response.body.message).to.be.equal(expected.message.createdOK);
      },
    );
  });
  describe('When requesting a new post active fail', () => {});
});
