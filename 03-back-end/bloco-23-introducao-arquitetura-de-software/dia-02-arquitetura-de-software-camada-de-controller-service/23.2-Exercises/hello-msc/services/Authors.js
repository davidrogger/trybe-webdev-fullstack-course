
const Author = require('../models/Author');

const getAll = async () => Author.getAll();

const findById = async (id) => Author.findById(id);

const create = async (firstName, middleName, lastName) => {
  const existingAuthor = await Author.create(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Author with this name already exists',
      },
    };
  }

  return Author.create(firstName, middleName, lastName);

}

module.exports = { create, findById, getAll };