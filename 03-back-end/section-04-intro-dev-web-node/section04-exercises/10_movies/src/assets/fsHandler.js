const fs = require('fs/promises');

async function getAllMovies() {
  const movies = await fs.readFile('../db/movies.json');
  return movies;
}

module.exports = {
  getAllMovies,
};
