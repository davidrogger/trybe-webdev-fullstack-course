const MoviesModel = require('../models/moviesModel');

const getById = async (id) => {
  const response = await MoviesModel.getById(id);  

  if (Object.keys(response).length === 0) return { error: { code: 404, message: `ID ${id} not found` } };
  
  return response;
};

module.exports = {
  getById,
}