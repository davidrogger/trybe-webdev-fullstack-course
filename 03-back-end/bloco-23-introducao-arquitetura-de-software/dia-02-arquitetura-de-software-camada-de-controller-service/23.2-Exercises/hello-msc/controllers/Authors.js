const Author = require('../services/Authors');

const getAll = async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors)
};

const findById = async (req, res, next) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (author.error) return next(author.error);

  return res.status(200).json(author);
};

const createAuthor = async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  const author = await Author.create(firstName, middleName, lastName);

  if (!author) {
    res.status(400).json({ message: 'invalid data' });
    return;
  };

  res.status(201).json(author)
};

module.exports = { getAll, findById, createAuthor };