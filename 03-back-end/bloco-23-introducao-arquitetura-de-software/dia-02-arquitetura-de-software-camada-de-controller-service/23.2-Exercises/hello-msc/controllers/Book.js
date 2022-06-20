const Book = require('../services/Books');
const Joi = require('joi');

const getAll = async (_req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);

};

const create = async (req, res, next) => {
  const { title, authorId } = req.body;

  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    authorId: Joi.number().not().empty().required(),
  }).validate({ title, authorId });

  if (error) {
    return next(error);
  }

  const book = await Book.create(title, authorId);

  if (book.error) return next(book.error);

  return res.status(201).json(book);
}

module.exports = {
  getAll,
  create,
};