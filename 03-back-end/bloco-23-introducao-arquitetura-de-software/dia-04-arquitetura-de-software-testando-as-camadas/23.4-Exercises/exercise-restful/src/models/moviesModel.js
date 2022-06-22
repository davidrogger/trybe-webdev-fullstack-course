const connection = require('./connection');

const getById = async (id) => {
  const query = `
    SELECT *
    FROM movies
    WHERE id = ?;
  `;
  const [response] = await connection.execute(query, [id]);

  if (response.length === 0) return {};

  const [movie] = response;
  return {
    title: movie.title,
    createdBy: movie.created_by,
    releaseYear: movie.release_year
  };
};

module.exports = {
  getById,
}