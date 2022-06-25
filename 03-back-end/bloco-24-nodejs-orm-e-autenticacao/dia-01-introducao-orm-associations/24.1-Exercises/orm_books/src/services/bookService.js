const Joi = require('joi');

const NotFoundError = require('../errors/NotFoundError');
const { Book } = require('../models/');

const runSchema = require('../services/validators');

const bookService = {
  validateId: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  })),
  validateBodyCreate: runSchema(Joi.object({
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
};

module.exports = bookService;