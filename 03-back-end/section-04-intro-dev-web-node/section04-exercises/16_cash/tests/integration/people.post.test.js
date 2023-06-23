const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const { expect } = chai;
chai.use(chaiHttp);

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const peopleRoute = '/people';

describe('Testing Route /people', () => {
  afterEach(sinon.restore);

  describe('When requesting to record a new person with success', () => {
    it('Should respond 201 with a message "New ID xx recorded with success!"', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 33 }]);

      const { status, body: { message } } = await chai
        .request(app)
        .post(peopleRoute)
        .send({
          firstName: 'Jonas',
          lastName: 'Doe',
          email: 'jonasdoe@always.here',
          phone: '111 222 3333',
        });

      expect(status).to.be.equal(201);
      expect(message).to.be.deep.equals({ message: 'New ID 33 recorded with success!' });
    });
  });
});
