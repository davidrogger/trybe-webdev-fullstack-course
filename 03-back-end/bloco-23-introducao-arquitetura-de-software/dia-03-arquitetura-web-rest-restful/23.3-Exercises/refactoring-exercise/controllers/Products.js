const { Router } = require('express');

const router = Router();

const ProductModel = require('../models/productModel');

router.get('/list-products', async (req, res) => {
  const products = await ProductModel.getAll();
  res.send(products);
});

module.exports = router;