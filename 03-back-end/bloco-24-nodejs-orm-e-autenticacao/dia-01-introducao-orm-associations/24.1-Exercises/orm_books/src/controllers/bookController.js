const bookService = require('../services/bookService');
const { status } = require('../helpers/');

const bookController = {
  async getAll (_req, res) {
    const books = await bookService.getAll();

    return res.status(status.HTTP_OK).json(books);
  },
};

module.exports = bookController;