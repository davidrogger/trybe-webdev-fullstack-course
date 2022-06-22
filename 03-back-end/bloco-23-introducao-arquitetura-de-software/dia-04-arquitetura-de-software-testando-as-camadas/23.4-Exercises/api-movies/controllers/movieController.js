const MoviesService = require('../services/moviesService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService.create({ title, directedBy, releaseYear });

  if (!movie) {
    return res.status(400).send('Dados invalidos');
  };

  res.status(201).send('Filme crado com sucesso!');
};

module.exports = {
  create,
}