const express = require('express');
const { getAllMovies, getMovieBy } = require('../assets/fsHandler');

const app = express();

app.get('/status', (_, res) => {
  res.status(200).json({ message: 'online' });
});

app.get('/movies', async (_, res) => {
  const movies = await getAllMovies();
  res.status(200).json(movies);
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movie = await getMovieBy(id);

  res.status(200).json(movie);
});

module.exports = app;
