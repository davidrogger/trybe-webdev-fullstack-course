const connection = require('./connection');

async function insert(person) {
  const {
    firstName, lastName, email, phone,
  } = person;

  return connection.execute(
    'INSERT INTO people (first_name, last_name, email, phone) VALUES (?, ?, ?, ?);',
    [firstName, lastName, email, phone],
  );
}

async function findAll() {
  return connection.execute(
    'SELECT * FROM people;',
  );
}

async function findById(id) {
  return connection.execute(
    'SELECT * FROM people WHERE id = ?;',
    [id],
  );
}

module.exports = {
  insert,
  findAll,
  findById,
};
