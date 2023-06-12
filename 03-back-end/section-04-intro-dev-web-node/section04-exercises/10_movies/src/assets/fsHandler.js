const fs = require('fs/promises');
const { resolve } = require('path');

const moviesPath = resolve(__dirname, '../db/movies.json');

async function getAllMovies() {
  const movies = await fs.readFile(moviesPath);
  return JSON.parse(movies);
}

async function getMovieBy(id) {
  const movies = await getAllMovies();
  const movieFound = movies.find((movie) => movie.id === Number(id));

  if (!movieFound) throw new Error('Id not found');

  return movieFound;
}

module.exports = {
  getAllMovies,
  getMovieBy,
};
