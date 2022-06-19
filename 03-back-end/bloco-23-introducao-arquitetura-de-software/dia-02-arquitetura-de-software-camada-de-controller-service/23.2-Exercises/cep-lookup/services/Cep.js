const Cep = require('../models/Cep');

const find = async (cep) => {
  const cepData = await Cep.find(cep);
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
