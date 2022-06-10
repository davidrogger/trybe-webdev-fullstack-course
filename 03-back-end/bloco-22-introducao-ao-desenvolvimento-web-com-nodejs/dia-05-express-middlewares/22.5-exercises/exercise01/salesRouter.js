const express = require('express');
const router = express.Router();

router.use(express,json());

router.post('/', (req, res) => {
  const { productName, infos: { saleDate, warrantyPeriod } } = req.body;
});