const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const fs = require('fs');
const http = require('../../src/assets/httpStatus');
const expected = require('../assets/expectedResponses');
const request = require('../assets/requestsTest');
const mockData = require('../assets/dataMock');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/app/app');

module.exports = {
  chai,
  sinon,
  fs,
  http,
  expected,
  request,
  expect,
  app,
  mockData,
};
