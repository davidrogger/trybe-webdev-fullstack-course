const express = require('express');
const { getAllMovies } = require('../assets/fsHandler');

const app = express();

app.get('/status', (_, res) => {
  res.status(200).json({ message: 'online' });
});

app.get('/movies', async (_, res) => {
  const movies = await getAllMovies();
  res.status(200).json(movies);
});

module.exports = app;
