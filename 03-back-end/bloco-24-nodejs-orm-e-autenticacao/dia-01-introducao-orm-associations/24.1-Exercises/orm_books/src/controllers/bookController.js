const bookService = require('../services/bookService');
const { status } = require('../helpers/');

const bookController = {
  async getAll (_req, res) {
    const books = await bookService.getAll();

    return res.status(status.HTTP_OK).json(books);
  },
  async getById (id) {
    const book = await bookService.getById(id);

    return res.status(status.HTTP_OK).json(book);
  },
};

module.exports = bookController;