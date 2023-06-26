const chai = require('chai');
const chaiHttp = require('chai-http');

const sinon = require('sinon');
const dataMock = require('../dataMock');

const { expect } = chai;
chai.use(chaiHttp);

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const peopleRoute = '/people';

describe('Testing Route /people', () => {
  afterEach(sinon.restore);

  describe('When requesting to POST a new person with success', () => {
    it('Should respond 201 with a message "New ID xx recorded with success!"', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 33 }]);

      const { status, body: { message } } = await chai
        .request(app)
        .post(peopleRoute)
        .send(dataMock.newValidUser);

      expect(status).to.be.equal(201);
      expect(message).to.be.deep.equal('New ID 33 recorded with success!');
    });
  });

  describe('When requesting to GET with success', () => {
    describe('Getting all people in the data', () => {
      it('Should return 200 with all people in the database', async () => {
        sinon.stub(connection, 'execute').resolves(dataMock.peopleList);

        const { status, body } = await chai
          .request(app)
          .get(peopleRoute);

        expect(status).to.be.equal(200);
        expect(body).to.be.deep.equal(dataMock.peopleList);
      });
    });
  });
});
