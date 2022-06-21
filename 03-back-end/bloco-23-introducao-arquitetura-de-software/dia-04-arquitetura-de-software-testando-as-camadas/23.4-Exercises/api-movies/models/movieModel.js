const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  try {
    const query = `
    INSERT INTO movies (title, directed_by, release_year)
    VALUES
      (?, ?, ?);
    `;
    const [movie] = await connection.execute(query, [title, directedBy, releaseYear]);  
    return { id: movie.insertId };    
  } catch (error) {
    return { error };
  }
};

module.exports = {
  create,
};