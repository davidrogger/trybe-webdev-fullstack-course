const { Router } = require('express');

const router = Router();

const ProductServices = require('../services/productServices');

// Removido 'list-products' do endpoint pois uma requisição do tipo GET,
// sem parâmetros que especifiquem um recurso (ex: id de um produto),
// já indica o retorno de uma coleção de recursos.
router.get('/', async (_req, res) => {
  const products = await ProductServices.getAll();
  res.send(products);
});

// Removido 'get-by-id' do endpoint pois uma requisição do tipo GET,
// com parâmetros que especifiquem um recurso (ex: id de um produto),
// já indica o retorno de um recurso.
router.get('/:id', async (req, res) => {
  const product = await ProductServices.getById(req.params.id);
  res.send(product);
});

router.post('/add-product', async (req, res) => {
  const { name, brand } = req.body;
  const newProduct = await ProductServices.add(name, brand);
  res.send(newProduct);
});

router.post('/delete-product/:id', async (req, res) => {
  const products = await ProductServices.exclude(req.params.id);
  res.send(products);
});

router.post('/update-product/:id', async (req, res) => {
  const { name, brand } = req.body;
  const products = await ProductServices.update(req.params.id, name, brand);
  res.send(products);
});

module.exports = router;