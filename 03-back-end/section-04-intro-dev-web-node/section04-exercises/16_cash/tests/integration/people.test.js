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

  describe('When requesting to POST a new person', () => {
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

  describe('When requesting to GET', () => {
    describe('Getting all people in the data', () => {
      it('Should return 200 with all people in the database', async () => {
        sinon.stub(connection, 'execute').resolves([dataMock.peopleList]);

        const { status, body } = await chai
          .request(app)
          .get(peopleRoute);

        expect(status).to.be.equal(200);
        expect(body).to.be.deep.equal(dataMock.peopleList);
      });
    });
    describe('Getting a person with an ID', () => {
      it('Should return status 200, with the ID selected', async () => {
        sinon.stub(connection, 'execute').resolves([[dataMock.peopleList[0]]]);

        const { status, body } = await chai
          .request(app)
          .get(`${peopleRoute}/1`);

        expect(status).to.be.equal(200);
        expect(body).to.be.deep.equal(dataMock.peopleList[0]);
      });
    });
    describe('Getting a person information that\'s ID don\'t exists', () => {
      it('Should return status 404 message "ID not found"', async () => {
        sinon.stub(connection, 'execute').resolves([[]]);

        const { status, body } = await chai
          .request(app)
          .get(`${peopleRoute}/2`);

        expect(status).to.be.equal(404);
        expect(body.message).to.be.equal('ID not found');
      });
    });
  });

  describe('When updating person information', () => {
    it('Should return status 200 with the updated', async () => {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

      const { status, body } = await chai
        .request(app)
        .put(`${peopleRoute}/1`)
        .send(dataMock.updateValidUser);
      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal({ id: 1, ...dataMock.updateValidUser });
    });
    it('Should return status 404 message "ID: xx not found" when not found the id', async () => {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);

      const { status, body } = await chai
        .request(app)
        .put(`${peopleRoute}/2`)
        .send(dataMock.updateValidUser);
      expect(status).to.be.equal(404);
      expect(body).to.be.deep.equal({ message: 'ID: 2 not found' });
    });
  });

  describe('When deleting a person', () => {
    it('Should return status 200 message "People ID xx was deleted"', async () => {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

      const { status, body } = await chai
        .request(app)
        .delete(`${peopleRoute}/1`);
      expect(status).to.be.equal(200);
      expect(body.message).to.be.deep.equal('People ID 1 was deleted');
    });
    it('Should return status 404 message "ID: xx not found" when not found the id', async () => {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);

      const { status, body } = await chai
        .request(app)
        .delete(`${peopleRoute}/2`);
      expect(status).to.be.equal(404);
      expect(body).to.be.deep.equal({ message: 'ID: 2 not found' });
    });
  });
});
