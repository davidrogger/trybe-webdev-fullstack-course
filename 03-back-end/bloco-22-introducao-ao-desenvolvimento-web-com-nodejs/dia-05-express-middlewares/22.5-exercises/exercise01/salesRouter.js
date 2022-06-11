const express = require('express');
const postSalesValidation = require('./postSalesValidation');

const router = express.Router();

router.post('/', [ postSalesValidation, (req, res) => {
  const { productName } = req.body;

  res.status(200).json({ message: `item ${productName}` });
}]);

module.exports = router;