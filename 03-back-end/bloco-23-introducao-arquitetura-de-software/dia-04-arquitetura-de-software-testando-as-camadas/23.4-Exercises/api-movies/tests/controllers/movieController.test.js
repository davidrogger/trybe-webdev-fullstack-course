const sinon = require('sinon');
const { expect } = require('chai');

const MoviesController = {
  create: () => {}
};

describe('Ao camar o controller de create', () => {
  describe('quando o payload informado não é valido', () => {
    const response = {};
    const request = {};
    
    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();
    })

    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);
      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });
  });

  describe('quando o payload informado é valido', () => {

  });
});