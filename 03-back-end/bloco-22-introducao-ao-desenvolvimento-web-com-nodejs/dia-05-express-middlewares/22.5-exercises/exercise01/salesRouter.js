const express = require('express');
const postSalesValidation = require('./postSalesValidation');

const router = express.Router();

router.post('/', [ postSalesValidation, (req, res) => {
  const { productName } = req.body;

  res.status(201).json({ message: `Sale of ${productName} create with sucess!` });
}]);

module.exports = router;