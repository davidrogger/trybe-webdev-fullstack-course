const Joi = require('joi');

const NotFoundError = require('../errors/NotFoundError');
const { Book } = require('../models/');

const runSchema = require('../services/validators');

const bookService = {
  validateId: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
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
  }
};

module.exports = bookService;