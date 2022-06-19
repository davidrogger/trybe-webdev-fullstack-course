const express = require('express');

const cepValidation = require('../middleware/cepValidation');

const router = express.Router();

const CepService = require('../services/Cep');
const { HTTP_OK_RESPONSE, HTTP_NOT_FOUND } = require('../status/status');

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