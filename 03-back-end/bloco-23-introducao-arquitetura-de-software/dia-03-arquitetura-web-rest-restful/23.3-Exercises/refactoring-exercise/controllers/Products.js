const { Router } = require('express');

const router = Router();

const ProductServices = require('../services/productServices');
const errorMiddleware = require('../middlewares/errorMiddleware');

// Removido 'list-products' do endpoint pois uma requisição do tipo GET,
// sem parâmetros que especifiquem um recurso (ex: id de um produto),
// já indica o retorno de uma coleção de recursos.
router.get('/', async (_req, res, next) => {
  const response = await ProductServices.getAll();

  if (response.error) return next(response.error);
  // Utilizamos o status code 200 para indicar que a requisição foi concluída
  // com sucesso e padronizamos o retorno para json.
  return res.status(200).json(response);
});

// Removido 'get-by-id' do endpoint pois uma requisição do tipo GET,
// com parâmetros que especifiquem um recurso (ex: id de um produto),
// já indica o retorno de um recurso.
router.get('/:id', async (req, res, next) => {
  const response = await ProductServices.getById(req.params.id);

  if (response.error) return next(response.error)
  
  res.status(response.status).json(response.product);
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

router.use(errorMiddleware);

module.exports = router;