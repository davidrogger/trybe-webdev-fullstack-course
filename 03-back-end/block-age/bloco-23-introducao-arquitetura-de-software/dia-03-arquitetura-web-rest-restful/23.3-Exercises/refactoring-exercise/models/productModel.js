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
    return { error };
  }
};

const getAll = async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM products');
    return rows;
  } catch (error) {
    return { error };
  }
};

const getById = async (id) => {
  try {
    const product = await connection.query('SELECT * FROM products WHERE id = ?;', [id]);
    return product;
  } catch (error) {
    return { error };
  }
};

const update = async (id, name, brand) => {
  try {
    const [result] = await connection.query(
      'UPDATE products SET name = ?, brand = ? WHERE id = ?',
      [name, brand, id],
    );
    return result;
  } catch (error) {
    return { error };
  }
};

const exclude = async (id) => {
  try {
    await connection.query('DELETE FROM products WHERE id = ?;', [id]);
  } catch (error) {
    return { error };
  }
}

module.exports = {
  add,
  getAll,
  getById,
  update,
  exclude,
};
