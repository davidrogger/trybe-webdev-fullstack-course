const { Router } = require('express');

const router = Router();

const ProductModel = require('../models/productModel');

// Removido 'list-products' do endpoint pois uma requisição do tipo GET,
// sem parâmetros que especifiquem um recurso (ex: id de um produto),
// já indica o retorno de uma coleção de recursos.
router.get('/', async (_req, res) => {
  const products = await ProductModel.getAll();
  res.send(products);
});

router.get('/get-by-id/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);
  res.send(product);
});

router.post('/add-product', async (req, res) => {
  const { name, brand } = req.body;
  const newProduct = await ProductModel.add(name, brand);
  res.send(newProduct);
});

router.post('/delete-product/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);
  res.send(products);
});

router.post('/update-product/:id', async (req, res) => {
  const { name, brand } = req.body;
  const products = await ProductModel.update(req.params.id, name, brand);
  res.send(products);
});

module.exports = router;