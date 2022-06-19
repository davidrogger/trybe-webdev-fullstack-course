const express = require('express');

const Joi = require('joi');

const cepValidation = require('../middleware/cepValidation');

const router = express.Router();

const CepService = require('../services/Cep');
const { HTTP_OK_RESPONSE, HTTP_NOT_FOUND, HTTP_CREATED } = require('../status/status');

router.post('/', async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const { error } = Joi.object({
    cep: Joi.string().pattern(new RegExp('d{5}-d{3}')).not().empty(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate({ cep, logradouro, bairro, localidade, uf });

  if (error) {
    return next(error);
  }

  const newData = { cep, logradouro, bairro, localidade, uf };

  const savedCep = await CepService.create(newData);

  if (savedCep.error) return next(savedCep.error);

  return res.status(HTTP_CREATED).json(savedCep);
});

router.get('/:cep', [
  cepValidation,
  async (req, res) => {
    const data = await CepService.find(req.cep);
    
    if (!data) {
 return res
    .status(HTTP_NOT_FOUND)
    .json({ error: { code: 'notFound', message: 'CEP não encontrado' } }); 
}
    
    res.status(HTTP_OK_RESPONSE).json(data);
}]);

module.exports = router;