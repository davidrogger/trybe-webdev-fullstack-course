const { Router } = require('express');

const router = Router();

const ProductServices = require('../services/productServices');
const errorMiddleware = require('../middlewares/errorMiddleware');
const fieldsValidation = require('../middlewares/validations');
const idValidation = require('../middlewares/idValidations');

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
router.get('/:id', [
  idValidation,
  async (req, res, next) => {
  const { id } = req.params;
  const response = await ProductServices.getById(id);
  if (response.error) return next(response.error);
  const [product] = response;
  if (product.length === 0) {
    return res.status(404).json({ message: `Product ID ${id} NotFound` });
  };
  res.status(200).json(product[0]);
}]);

// Removido 'add-product' do endpoint pois uma requisição do tipo POST
// já indica a criação de um novo recurso.
router.post('/', [
  fieldsValidation,
  async (req, res, next) => {
  const { name, brand } = req.body;
  const response = await ProductServices.add(name, brand);
  if (response.error) return next(response.error);
  res.status(201).json(response);
}]);

// Altere o verbo HTTP para DELETE e remova 'delete-product' do endpoint,
// uma vez que uma requisição do tipo DELETE já indica que o endpoint será
// usado para deletar um recurso
router.delete('/:id', async (req, res) => {
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