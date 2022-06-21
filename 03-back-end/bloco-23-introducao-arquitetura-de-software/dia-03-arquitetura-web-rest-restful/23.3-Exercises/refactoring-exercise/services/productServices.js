const productModel = require('../models/productModel');

const getAll = () => productModel.getAll();

const getById = async (id) => {
  try {
    const response = await productModel.getById(id);
    return response;
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
  const exists = await getById(id);


}

module.exports = {
  getAll,
  getById,
  add,
};