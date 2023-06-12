const fs = require('fs/promises');
const { resolve } = require('path');

const moviesPath = resolve(__dirname, '../db/movies.json');

async function getAllMovies() {
  const movies = await fs.readFile(moviesPath);
  return JSON.parse(movies);
}

module.exports = {
  getAllMovies,
};
