const express = require('express');
const fs = require('fs');

const authMiddleware = require('../exercise02/authMiddleware');
const postSalesValidation = require('./postSalesValidation');
const checkData = require('../src/checkData');

const { filePath } = require('../defaultVariables');

const router = express.Router();

router.post('/', [ authMiddleware, postSalesValidation, checkData, (req, res) => {
  const { productName } = req.body;

  const addNewSale = [ ...req.data, req.newSale ];

  const stringifyData = JSON.stringify(addNewSale);
  fs.writeFileSync(filePath, stringifyData);
  res.status(201).json({ message: `Sale of ${productName} create with sucess!` });
}]);

module.exports = router;