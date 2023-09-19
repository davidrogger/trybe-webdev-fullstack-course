
const Author = require('../models/Author');

const getAll = async () => Author.getAll();

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `It\s not possible to find the author id: ${id}.`,
      },
    };
  }

  return author;

}

const create = async (firstName, middleName, lastName) => {
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

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