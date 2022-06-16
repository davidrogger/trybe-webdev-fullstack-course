
const Author = require('../models/Author');

const isValid = (firstName, middleName, lastName) => {
  const requiredNameUndefined = [firstName, lastName].some((name) => !name || typeof name !== 'string');
  const existsUndefined = typeof middleName !== 'string';

  if (requiredNameUndefined || existsUndefined) return false;

  return true;
};

const getAll = async () => {
  const author = await Author.getAll();

  return author.map(Author.getNewAuthor);
}

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) return null;

  return Author.getNewAuthor(author);
};

const create = async (firstName, middleName, lastName) => {
  const validAuthor = isValid(firstName, middleName, lastName);

  if (!validAuthor) return false;

  const [author] = await Author.create(firstName, middleName, lastName);

  return Author.getNewAuthor({
    id: author.id,
    firstName,
    middleName,
    lastName,
  });

}

module.exports = { isValid, create, findById, getAll };