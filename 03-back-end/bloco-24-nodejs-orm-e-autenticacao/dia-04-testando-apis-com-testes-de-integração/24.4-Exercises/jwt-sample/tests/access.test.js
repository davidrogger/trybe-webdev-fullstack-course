const chai = require('chai');
const { stub } = require('sinon');
const { expect } = chai;
const chaiHttp = require('chai-http');

const server = require('../src/api/app');
const { User } = require('./mock/models');
const { User: userMock } = require('./mock/models');

chai.use(chaiHttp);

describe('Autentication token need to access /posts', () => {
  let response;
  let login;
  describe('When token is not found', () => {
    before(async () => {
      response = await chai.request(server).get('/post/1')
    });

    it('Should response 404 token not found', () => {
      expect(response).to.have.status(404);
      expect(response.body.message).to.be.equal('Token Not Found');
    })
  });
  describe('When there is a token', () => {
    before(async () => {
      stub(User, 'findOne').callsFake(userMock.findOne);
      login = await chai.request(server).post('/user/login').send({ username: 'mysuk', password: 'yareyare' });
    });

    it('Should response 401 when the token is invalid to that access', () => {
      response = await chai.request(server).get('/post/1').set('authorization', login.body.token );
      expect(response).to.have.status(401);
      expect(response.body.message).to.be.equal('Access denied');
    });

    it('Should response 200 when the token is valid to that user', async () => {
      response = await chai.request(server).get('/post/2').set('authorization', login.body.token );
      expect(response).to.have.status(200);
      expect(response.body.name).to.be.equal('mysuk');
    });
  });
});