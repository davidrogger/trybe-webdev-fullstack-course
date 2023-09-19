const MoviesModel = require('../models/movieModel');

const isValid = (title, directedBy, releaseYear) => {
  if ([title, directedBy, releaseYear].includes(undefined)) return false;
  if ([title, directedBy].some((item) => typeof(item) !== 'string')) return false;
  if (typeof(releaseYear) !== 'number') return false;
  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {

    const isMovieValid = isValid(title, directedBy, releaseYear);
    if (!isMovieValid) return false;
    const { id } = await MoviesModel.create({ title, directedBy, releaseYear });
    return { id };    

};

module.exports = {
  create,
};