const { Book } = require('../models/');

const bookService = {
  async getAll () {
    const books = await Book.findAll();
    return books;
  },
};

module.exports = bookService;