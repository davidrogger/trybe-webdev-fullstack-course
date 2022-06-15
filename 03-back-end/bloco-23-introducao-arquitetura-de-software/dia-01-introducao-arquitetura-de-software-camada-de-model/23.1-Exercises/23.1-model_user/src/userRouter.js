const express = require('express');
const router = express.Router();

const valueValidation = require('../middlewares/valueValidation');

router.post('/', [
  valueValidation,
  (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  
}]);

module.exports = router;