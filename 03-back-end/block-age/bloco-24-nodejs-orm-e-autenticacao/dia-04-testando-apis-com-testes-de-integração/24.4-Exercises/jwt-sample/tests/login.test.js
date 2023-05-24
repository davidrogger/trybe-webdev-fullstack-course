const { stub } = require('sinon');

const { User } = require('../src/database/models');
const { User: userMock } = require('./mock/models');

const server = require('../src/api/app');

const chai = require('chai');
const chaiHttp = require('chai-http');
const { tokenVerify } = require('../src/helpers/tokenJWT');
const { expect } = chai;

chai.use(chaiHttp);

describe('Route /user/login', () => {
  before(() => {
    stub(User, 'findOne').callsFake(userMock.findOne);
  });
  after(() => {
    User.findOne.restore();
  });

  describe('When the user is invalid or not registred' , () => {
    let login;
    let userLogin;

    before(async () => {
      userLogin = { username: 'invalid', password: 'invalid' };
      login = await chai.request(server).post('/user/login').send(userLogin);
    });

    it('Should response 404 user not found', () => {
      expect(login).to.have.status(404);
      expect(login).not.to.have.status(500);
      expect(login.body.message).to.be.equal('User not found or incorrect password');
    });
  });

  describe('When the user is valid', () => {
    before(async () => {
      userLogin = { username: 'mysuk', password: 'yareyare' };
      login = await chai.request(server).post('/user/login').send(userLogin);
    });
    
    it('Should response 200, with an authorization token', async () => {
      const { token } = login.body;
      const payload = await tokenVerify(token);

      expect(login).to.have.status(200);
      expect(login.body).to.have.property('token');
      expect(userLogin.username).to.be.equal(payload.data.name);
      
    })
  })
});