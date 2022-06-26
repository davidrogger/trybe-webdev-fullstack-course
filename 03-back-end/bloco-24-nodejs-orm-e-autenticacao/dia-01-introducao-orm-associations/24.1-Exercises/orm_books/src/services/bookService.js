const Joi = require('joi');

const NotFoundError = require('../errors/NotFoundError');
const { Book } = require('../models/');

const runSchema = require('../services/validators');

const bookService = {
  validateId: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  })),
  validateBody: runSchema(Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    pageQuantity: Joi.number().integer().positive().required(),
  })),
  async getAll () {
    const books = await Book.findAll();
    return books;
  },
  async getById (id) {
    const book = await Book.findByPk(id);

    if (!book) {
      throw new NotFoundError('"book" not found');
    }

    return book;
  },
  async create ({ title, author, pageQuantity }) {
    const newBook = await Book.create({ title, author, pageQuantity });
    return newBook;
  },
  async update({ id, title, author, pageQuantity }) {
    const [updateBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );

    if (!updateBook) throw new Error('something went wrong');
  },
  async remove (id) {
    const bookRemove = await Book.destroy({ where: { id } });

    if (!bookRemove) throw new Error('Something went wrong');
  
  },
};

module.exports = bookService;