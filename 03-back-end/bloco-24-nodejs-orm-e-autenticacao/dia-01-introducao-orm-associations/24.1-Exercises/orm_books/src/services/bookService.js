const NotFoundError = require('../errors/NotFoundErro');
const { Book } = require('../models/');

const bookService = {
  async getAll () {
    const books = await Book.findAll();
    return books;
  },
  async getById (id) {
    const book = await Book.findByPk(id);
    return book;
  }
};

module.exports = bookService;