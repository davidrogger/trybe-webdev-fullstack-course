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

    });
  });
});
