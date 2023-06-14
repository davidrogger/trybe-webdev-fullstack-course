const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

const sinon = require('sinon');
const fs = require('fs');
const { mockFile } = require('../mock/mock_chocolates');

const app = require('../../src/app/app');

describe('Method Get /chocolates', () => {
  beforeEach(() => {
    sinon.stub(fs.promises, 'readFile').resolves(JSON.stringify(mockFile));
  });
  afterEach(() => {
    sinon.restore();
  });

  it('Should list all chocolates', async () => {
    const response = await chai.request(app).get('/chocolates');
    expect(response.status).to.be.equals(200);
    expect(response.body.chocolates).to.be.deep.equal(mockFile.chocolates);
  });
});
