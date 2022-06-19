const express = require('express');

const router = express.Router();

const { HTTP_OK_RESPONSE } = require('../status/status');

router.get('/', (_req, res) => {
  res.status(HTTP_OK_RESPONSE).json({ message: 'pong' });
})

module.exports = router;