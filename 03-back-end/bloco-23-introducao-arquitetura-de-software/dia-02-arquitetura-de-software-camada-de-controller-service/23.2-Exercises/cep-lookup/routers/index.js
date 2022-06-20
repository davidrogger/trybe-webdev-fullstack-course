const express = require('express');

const router = express.Router();

const rescue = require('express-rescue');
const errorMiddleware = require('../middleware/error');

const pingController = require('../controllers/Ping');
const cepController = require('../controllers/Cep');

router.use('/ping', rescue(pingController));
router.use('/cep', rescue(cepController));

router.use(errorMiddleware);

module.exports = router;