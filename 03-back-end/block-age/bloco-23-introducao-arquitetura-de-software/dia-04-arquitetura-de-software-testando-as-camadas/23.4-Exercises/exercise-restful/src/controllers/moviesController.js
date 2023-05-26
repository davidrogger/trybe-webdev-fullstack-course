const MoviesService = require('../services/moviesServices');

const getById = async (req, res, next) => {
  const  { id } = req.params;

  if (!id) return res.status(400).json({ message: `ID is required` });

  const response = await MoviesService.getById(req.params.id);

  if (response.error) {
    return res.status(404).json({message: `ID ${id} not found`});
  }

  return res.status(200).json(response);
};

module.exports = {
  getById,
};
