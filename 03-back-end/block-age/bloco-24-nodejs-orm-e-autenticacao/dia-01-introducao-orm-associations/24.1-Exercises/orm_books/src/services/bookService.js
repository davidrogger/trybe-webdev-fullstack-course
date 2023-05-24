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
    publisher: Joi.string().required(),
  })),
  validateAuthor: runSchema(Joi.object({
    author: Joi.string().required(),
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
  async getByAuthor (author) {
    // https://www.codegrepper.com/code-examples/javascript/sequelize+order+by
    const order = [['title', 'ASC']];
    const bookToFind = author ? { where: { author }, order } : { order } ;

    const authors = await Book.findAll(bookToFind);

    if (authors.length === 0) throw new NotFoundError('none "author" was found');

    return authors;
  },
  async create ({ title, author, pageQuantity, publisher }) {
    const newBook = await Book.create({ title, author, pageQuantity, publisher });
    return newBook;
  },
  async update({ id, title, author, pageQuantity, publisher }) {
    const [updateBook] = await Book.update(
      { title, author, pageQuantity, publisher },
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