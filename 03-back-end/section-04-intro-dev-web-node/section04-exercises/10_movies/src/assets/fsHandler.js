const fs = require('fs/promises');
const { resolve } = require('path');

const moviesPath = resolve(__dirname, '../db/movies.json');

async function getAllMovies() {
  const movies = await fs.readFile(moviesPath);
  return JSON.parse(movies);
}

async function getMovieBy(id) {
  const movies = await getAllMovies();
  const index = movies.findIndex((movie) => movie.id === Number(id));

  if (!index) throw new Error('Id not found');

  return { found: movies[index], index };
}

async function getMovieIncludes(title) {
  const movies = await getAllMovies();
  const standardizeTitle = title.toLowerCase();

  if (!title) return movies;

  return movies
    .filter(
      ({ movie }) => movie.toLowerCase().includes(standardizeTitle),
    );
}

function generateId() {
  return Date.now();
}

async function addNewMovie(movie) {
  const movies = await getAllMovies();
  const id = generateId();

  if (!movie) throw new Error('Empty body, not allowed');

  const newMovie = { id, ...movie };
  movies.push(newMovie);

  fs.writeFile(moviesPath, JSON.stringify(movies));

  return newMovie;
}

async function updateMovieBy(id, payload) {
  if (!id || !payload) throw new Error('Missing data to update');

  const movies = await getAllMovies();
  const { found: movieFound, index: movieIndex } = await getMovieBy(id);

  const movieUpdated = { ...movieFound, ...payload };

  movies.splice(movieIndex, 1, movieUpdated);

  fs.writeFile(moviesPath, JSON.stringify(movies));

  return movieUpdated;
}

async function deleteMovieBy(id) {
  if (!id) throw new Error('Missing id input');

  const movies = await getAllMovies();
  const movie = await getMovieBy(id);

  movies.splice(movie.index, 1);

  fs.writeFile(moviesPath, JSON.stringify(movies));
}

module.exports = {
  getAllMovies,
  getMovieBy,
  addNewMovie,
  updateMovieBy,
  deleteMovieBy,
  getMovieIncludes,
};
