const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

const sinon = require('sinon');
const fs = require('fs');
const { mockFile } = require('../mock/mock_chocolates');
const expectedData = require('../expectedData/expected.variables');

const app = require('../../src/app/app');

describe('Route Get /chocolates', () => {
  beforeEach(() => {
    sinon.stub(fs.promises, 'readFile').resolves(JSON.stringify(mockFile));
  });
  afterEach(() => {
    sinon.restore();
  });

  describe('When calling route /chocolates', () => {
    it('Should list all chocolates', async () => {
      const response = await chai.request(app).get('/chocolates');
      expect(response.status).to.be.equals(200);
      expect(response.body.chocolates).to.be.deep.equal(mockFile.chocolates);
    });
  });

  describe('When calling specifing an id, /chocolates/:id', () => {
    it('Should get information about that chocolate id if found it', async () => {
      const response = await chai.request(app).get('/chocolates/1');
      expect(response.status).to.be.equals(200);
      expect(response.body.chocolate).to.be.deep.equal(mockFile.chocolates[0]);
    });

    it('Should response 404 if the id is not found', async () => {
      const response = await chai.request(app).get('/chocolates/10');
      expect(response.status).to.be.equals(404);
      expect(response.body.message).to.be.equals('Chocolate ID not found');
    });
  });

  describe('When looking for the brand id /chocolates/brand/:id', () => {
    it('Should list all chocolates from that brand id', async () => {
      const brands = [1, 2];

      await Promise.all(
        brands.map(async (brandId) => {
          const endpoint = `/chocolates/brand/${brandId}`;
          const response = await chai.request(app).get(endpoint);
          expect(response.status).to.be.equals(200);
          expect(response.body.chocolates).to.be.deep.equal(expectedData.chocoByBrand[brandId]);
        }),
      );
    });
    it('Should response 404 if the brand is not found', async () => {
      const expectedMessage = 'Brand ID not found';
      const response = await chai.request(app).get('/chocolates/brand/10');
      expect(response.status).to.be.equals(404);
      expect(response.body.message).to.be.equals(expectedMessage);
    });
  });

  describe('Route get /chocolates/total', () => {
    it('Should return the total of type of chocolates recorded', async () => {
      const totalExpected = 4;
      const response = await chai.request(app).get('/chocolates/total');
      expect(response.status).to.be.equals(200);
      expect(response.body.total).to.be.equals(totalExpected);
    });
  });

  describe('Route get /chocolates/search', () => {
    it('Should return the chocolates with the word typed', async () => {
      const searchWords = ['mo', 'white'];
      await Promise.all(
        searchWords.map(async (word) => {
          const endpoint = `/chocolates/search?name=${word}`;
          const response = await chai.request(app).get(endpoint);
          expect(response.status).to.be.equals(200);
          expect(response.body.chocolates).to.be.deep.equals(expectedData.chocoSearch[word]);
        }),
      );
    });

    it('Should return an empty list with status 404 when not found the name', async () => {
      const emptyList = [];
      const response = await chai.request(app).get('/chocolates/search?name=teste');
      expect(response.status).to.be.equals(404);
      expect(response.body.chocolates).to.be.deep.equal(emptyList);
    });
  });

  describe('Route Put /chocolates/:id', () => {
    it('Should return status 404 when the id is not found', async () => {
      const messageExpected = 'Chocolate ID not found';
      const response = await chai.request(app).put('/chocolates/20');
      expect(response.status).to.be.equals(404);
      expect(response.body.message).to.be.equal(messageExpected);
    });
    it('Should return status 400 when missing a required field', async () => {
      const messageDefault = 'Missing required field';
      const failRequests = [
        {
          missingField: 'name',
          bodySent: { brandId: 1 },
        },
        {
          missingField: 'brandId',
          bodySent: { name: 'Choquito' },
        },
      ];
      await Promise.all(
        failRequests.map(async ({ missingField, bodySent }) => {
          const response = await chai.request(app).put('/chocolates/1').send(bodySent);
          expect(response.status).to.be.equals(400);
          expect(response.body.message).to.be.equal(`${messageDefault} ${missingField}`);
        }),
      );
    });
    it('Should update the chocolate', async () => {
      sinon.stub(fs.promises, 'writeFile').resolves();
      const updateBody = { name: 'Choquito', brandId: 1 };
      const response = await chai.request(app).put('/chocolates/1').send(updateBody);
      expect(response.status).to.be.equals(200);
      expect(response.body.chocolate).to.be.deep.equal(expectedData.chocoUpdated);
      expect(fs.promises.writeFile.called).to.be.equal(true);
    });
  });
});
