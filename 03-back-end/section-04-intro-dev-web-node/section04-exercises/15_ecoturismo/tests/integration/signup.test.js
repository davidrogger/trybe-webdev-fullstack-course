const {
  chai,
  sinon,
  fs,
  http,
  request,
  expect,
  app,
  mockData,
} = require('./index');

const signupRoute = '/signup';

describe('Testing route /signup', () => {
  beforeEach(() => {
    sinon.stub(fs.promises, 'readFile').resolves(JSON.stringify(mockData));
  });
  describe('Signing up with success', () => {
    it('Should return status 200, with a token', async () => {
      const { status, body } = await chai
        .request(app).post(signupRoute).send(request.POST.validSignup);
      expect(status).to.be.equal(http.OK);
      expect(body.token).to.have.lengthOf(16);
    });
  });
});
