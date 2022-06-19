const express = require('express');

const cepValidation = require('../middleware/cepValidation');

const router = express.Router();

const CepService = require('../services/Cep');
const { HTTP_OK_RESPONSE } = require('../status/status');

router.get('/:cep', [
  cepValidation,
  async (req, res) => {
    const data = await CepService.find(req.params);
    res.status(HTTP_OK_RESPONSE).json(data);
}]);

module.exports = router;