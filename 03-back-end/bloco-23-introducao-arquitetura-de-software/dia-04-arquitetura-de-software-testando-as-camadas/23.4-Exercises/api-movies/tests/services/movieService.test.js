const { expect } = require('chai');

const MovieService = {
  create: () => {}
};

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MovieService.create(payloadMovie);
      expect(response).to.be.a('boolean');
    });

    if('o boolean contém "false"', async () => {
      const response = await MovieService.create(payloadMovie);
      expect(response).to.be.equal(false);
    });

  })

  describe('quando é inserido com sucesso', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Bow',
      releaseYear: 1999,
    };

    it('retornar um objeto', async () => {
      const response = await MovieService.create(payloadMovie);
      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MovieService.create(payloadMovie);
      expect(response).to.have.a.property('id');
    });

  });
});
