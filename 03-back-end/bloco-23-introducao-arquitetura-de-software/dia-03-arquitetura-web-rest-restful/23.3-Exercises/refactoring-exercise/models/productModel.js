const connection = require('./connection');

const add = async (name, brand) => {
  try {
    const [
      result,
    ] = await connection.query(
      'INSERT INTO products (name, brand) VALUES (?, ?);',
      [name, brand],
    );

    return { id: result.insertId, name, brand };
  } catch (error) {
    console.error(error);
    return process.exit(1);
  }
};

module.exports = {
  add,
};
