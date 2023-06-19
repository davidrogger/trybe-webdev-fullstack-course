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

describe.only('Testing route /signup', () => {
  beforeEach(() => {
    sinon.stub(fs.promises, 'readFile').resolves(JSON.stringify(mockData));
  });
  afterEach(() => {
    sinon.restore();
  });
  describe('Signing up with success', () => {
    it('Should return status 200, with a token', async () => {
      const { status, body } = await chai
        .request(app).post(signupRoute).send(request.POST.signupTest.valid);
      expect(status).to.be.equal(http.OK);
      expect(body.token).to.have.lengthOf(16);
    });
  });

  describe('Singning up with fail', () => {
    describe('When missing fields', () => {
      it('Should return 401, with message, "Missing required fields"', async () => {
        const {
          email, password, firstName, phoneNumber,
        } = {
          email: request.POST.signupTest.missingEmail,
          password: request.POST.signupTest.missingPassword,
          firstName: request.POST.signupTest.missingFirstName,
          phoneNumber: request.POST.signupTest.missingPhoneNumber,
        };
        await Promise.all(
          [email, password, firstName, phoneNumber].map(async (requestBody) => {
            const { status, body } = await chai
              .request(app).post(signupRoute).send(requestBody);
            expect(status).to.be.equal(http.UNAUTHORIZED);
            expect(body.message).to.be.equal('Missing required fields');
          }),
        );
      });
    });
  });
});
