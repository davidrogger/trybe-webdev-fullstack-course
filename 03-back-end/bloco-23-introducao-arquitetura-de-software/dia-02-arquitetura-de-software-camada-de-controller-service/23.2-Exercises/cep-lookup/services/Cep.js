const axios = require('axios');
const Cep = require('../models/Cep');
const { cleanCep } = require('../helpers/cleanCep');

const findExternalCep = async (cep) => {
  try {
    const URL = ` https://viacep.com.br/ws/${cep}/json/`;
    const foundCep = await axios.get(URL);
    return foundCep.data;    
  } catch (error) {
    return error;
  }
};

const checkApiResponse = async (response) => {
  switch (true) {
    case typeof response.erro !== 'undefined': {
      return null;
    }
    case typeof response.cep !== 'undefined': {
      return Cep.create(response);
    }
    default: {
      return response;
    }
  }
};

const find = async (cep) => {
  const cepStandardizad = cleanCep(cep);
  const cepData = await Cep.find(cepStandardizad);
  const notFound = 0;

  if (cepData.length === notFound) {
    const apiCep = await findExternalCep(cep);
    if (apiCep.message) {
      return {
        error: {
          code: 'BadRequest',
          message: apiCep.message,
          url: apiCep.config.url,
        },
    }; 
}
    const standardFormat = { ...apiCep, cep: cleanCep(apiCep.cep) };
    return checkApiResponse(standardFormat);
  }

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
