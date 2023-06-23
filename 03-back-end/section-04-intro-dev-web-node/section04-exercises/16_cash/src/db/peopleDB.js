const connection = require('./connection');

async function insert(person) {
  const {
    firstName, lastName, email, phone,
  } = person;

  return connection.execute(
    'INSERT INTO PEOPLE (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, phone],
  );
}

module.exports = {
  insert,
};
