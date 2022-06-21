const productModel = require('../models/productModel');

const getAll = () => productModel.getAll();

const getById = async (id) => {
  try {
    if (isNaN(id)) {
      return { status: 400, product: { message: `Product ID "${id}" have to be a number` }};
    };
    const response = await productModel.getById(id);
    if (response.error) return response;
    const [product] = response;
    if (product.length === 0) {
      return { error: { code: 'notFound', status: 404, message: `Product ID ${id} NotFound` }};
    }
    return { status: 200, product: product[0] };
  } catch (error) {
    return { error };
  }
};

const add = async (name, brand) => {
  try {
    const response = await productModel.add(name, brand);
    return response;    
  } catch (error) {
    return { error };
  }
}

const exclude = async (id) => {
  const response = await getById(id);

  if (response.error) return response;

  productModel.exclude(id);
  return response;

}

module.exports = {
  getAll,
  getById,
  add,
  exclude,
};