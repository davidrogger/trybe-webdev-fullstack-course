const Cep = require('../models/Cep');

const find = async (cep) => {
  const cepData = await Cep.find(cep);
  const notFound = 0;

  if (cepData.length === notFound) return null;

  return cepData[0];
};

module.exports = {
  find,
};
