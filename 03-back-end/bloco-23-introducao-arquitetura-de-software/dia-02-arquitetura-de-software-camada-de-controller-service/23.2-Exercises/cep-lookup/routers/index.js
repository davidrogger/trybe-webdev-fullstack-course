const express = require('express');
const router = express.Router();

const pingController = require('../controllers/Ping');

router.use('/ping', pingController);

module.exports = router;