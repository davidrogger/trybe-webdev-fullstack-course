const express = require('express');

const router = express.Router();

const pingController = require('../controllers/Ping');
const cepController = require('../controllers/Cep');

router.use('/ping', pingController);
router.use('/cep', cepController);

module.exports = router;