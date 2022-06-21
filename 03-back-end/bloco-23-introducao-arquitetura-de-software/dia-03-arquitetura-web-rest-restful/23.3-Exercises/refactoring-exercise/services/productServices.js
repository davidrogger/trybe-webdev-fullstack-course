const productModel = require('../models/productModel');

const getAll = () => productModel.getAll();

module.exports = {
  getAll,
};