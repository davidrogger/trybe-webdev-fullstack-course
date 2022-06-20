const express = require('express');

const Joi = require('joi');
const { cleanCep } = require('../helpers/cleanCep');

const cepValidation = require('../middleware/cepValidation');

const router = express.Router();

const CepService = require('../services/Cep');
const { HTTP_OK_RESPONSE, HTTP_NOT_FOUND, HTTP_CREATED } = require('../status/status');

const validCep = /^\d{5}-\d{3}$/;
const cepBodyValidation = Joi.object({
  cep: Joi.string().pattern(new RegExp(validCep)).required(),
  logradouro: Joi.string().not().empty().required(),
  bairro: Joi.string().not().empty().required(),
  localidade: Joi.string().not().empty().required(),
  uf: Joi.string().not().empty().required(),
});

router.post('/', async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const { error } = cepBodyValidation
  .validate({ cep, logradouro, bairro, localidade, uf });

  if (error) {
    return next(error);
  }
  const newData = { cep: cleanCep(cep), logradouro, bairro, localidade, uf };

  const savedCep = await CepService.create(newData);

  if (savedCep.error) return next(savedCep.error);

  return res.status(HTTP_CREATED).json(savedCep);
});

router.get('/:cep', [
  cepValidation,
  async (req, res, next) => {
    const data = await CepService.find(req.cep);
    
    if (!data) {
 return res
    .status(HTTP_NOT_FOUND)
    .json({ error: { code: 'notFound', message: 'CEP não encontrado' } }); 
}
  if (data.error) return next(data.error);
    
    res.status(HTTP_OK_RESPONSE).json(data);
}]);

module.exports = router;