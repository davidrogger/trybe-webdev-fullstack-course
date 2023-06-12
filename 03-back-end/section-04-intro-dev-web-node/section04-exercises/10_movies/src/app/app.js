const express = require('express');
const {
  getAllMovies, getMovieBy, addNewMovie, updateMovieBy, deleteMovieBy,
} = require('../assets/fsHandler');

const app = express();

app.use(express.json());

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

app.post('/movies', async (req, res) => {
  const payload = req.body;
  const movie = await addNewMovie(payload);

  res.status(201).json(movie);
});

app.put('/movies/:id', async (req, res) => {
  const payload = req.body;
  const { id } = req.params;
  const movie = await updateMovieBy(id, payload);

  res.status(200).json(movie);
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  await deleteMovieBy(id);

  res.status(204).send();
});

module.exports = app;
