const { cleanCep } = require('../helpers/cleanCep');
const Cep = require('../models/Cep');

const find = async (cep) => {
  const cepStandardizad = cleanCep(cep);
  const cepData = await Cep.find(cepStandardizad);
  const notFound = 0;

  if (cepData.length === notFound) return null;

  return cepData[0];
};

const create = async (newData) => {
  const alreadyExists = await find(newData.cep);

  if (alreadyExists) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }

  return Cep.create(newData);
};

module.exports = {
  find,
  create,
};
