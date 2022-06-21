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
      return { status: 404, product: { message: `Product ID ${id} NotFound` }};
    }
    return { status: 200, product: product[0] };
  } catch (error) {
    return { error };
  }
};

module.exports = {
  getAll,
  getById,
};