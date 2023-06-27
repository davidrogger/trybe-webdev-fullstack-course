const express = require('express');
const generateToken = require('../assets/generateToken');

const router = express.Router();

const signupValidation = require('./signupValidation');

router.post('/', [signupValidation, (req, res) => {
  const token = generateToken();

  res.status(200).json({ token });

}]);

module.exports = router;