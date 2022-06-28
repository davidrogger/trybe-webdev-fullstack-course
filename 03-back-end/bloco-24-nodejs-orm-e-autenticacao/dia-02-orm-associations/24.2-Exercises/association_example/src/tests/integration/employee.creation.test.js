const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../index');

const consoleLogStub = stub(console, 'log');
before(() => consoleLogStub.returns(true));
after(() => consoleLogStub.restore());

describe('Route POST /employees', () => {
  describe('quando os dados do "body" são válidos', () => {
    let postEmployee;
    let getEmployee;

    before(async () => {
      try {
        postEmployee = await chai.request(app)
          .post('/employees')
          .send({
            firstName: "Rodrigo",
            lastName: "Oliveira",
            age: 30,
            city: "TrybeCity",
            street: "Rua teste",
            number: 42
          });

          const { body: { id } } = postEmployee;

          getEmployee = await chai.request(app)
            .get(`/employees/${id}`);
      } catch (error) {
        console.error(error.message);
      }
    });

    it('should return 201 - Created', async () => {
      const { status } = postEmployee;

      expect(status).to.be.equals(201);
    });

    it('Should return a message "Sucessfully register!"', async () => {
      const { body: { message } } = postEmployee;

      expect(message).to.be.equals('Sucessfully register!');
    });

    it('Should be able to query employees by its returned id', async () => {
      const { body: { id: postId } } = postEmployee;
      const { body: { id: getId } } = getEmployee;

      expect(postId).to.be.equals(getId);
      
    });

    it('Should return the "addresses" with at least one item', async () => {
      const { body: { addresses } } = getEmployee;
      expect(addresses.length).to.be.greaterThanOrEqual(1);
    });
  });

  describe('When the body data are invalids', () => {
    let postEmployee;

    before(async () => {
      try {
        // removendo city
        postEmployee = await chai.request(app)
          .post('/employees')
          .send({
            firstName: 'Rodrigo',
            lastName: 'Oliveira',
            age: 30,
            street: 'Rua teste',
            number: 42,
          });
        } catch (error) {
          console.error(error.message);
        }
    });

    it('Should return "500 - Interal Server Error"', async () => {
      const { status } = postEmployee;

      expect(status).to.be.equals(500);
    });

    it('Should return a message "Something went wrong', async () => {
      const { body: { message } } = postEmployee;

      expect(message).to.be.equals('Something went wrong');
    });
  })

})