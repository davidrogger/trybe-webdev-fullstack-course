const { Router } = require('express');

const router = Router();

const ProductModel = require('../models/productModel');

router.get('/list-products', async (req, res) => {
  const products = await ProductModel.getAll();
  res.send(products);
});

router.get('/get-by-id/:id', (req, res) => {
  const product = await ProductModel.getById(req.params.id);
  res.send(product);
});

module.exports = router;