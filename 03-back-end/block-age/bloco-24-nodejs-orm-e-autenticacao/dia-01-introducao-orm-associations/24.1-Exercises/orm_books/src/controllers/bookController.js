const bookService = require('../services/bookService');
const { status, message } = require('../helpers/');

const bookController = {
  async getAll (_req, res) {
    const books = await bookService.getAll();

    return res.status(status.HTTP_OK).json(books);
  },
  async getById (req, res) {
    const { id } = await bookService.validateId(req.params);
    const book = await bookService.getById(id);

    return res.status(status.HTTP_OK).json(book);
  },
  async getByAurthor (req, res) {
    const { author } = req.query;
    const authors = await bookService.getByAuthor(author);
    res.status(status.HTTP_OK).json(authors);
  },
  async create (req, res) {
    const newBook = await bookService.validateBody(req.body);
    const savedBook = await bookService.create(newBook);
    res.status(status.HTTP_CREATED).json(savedBook);
  },
  async update (req, res) {
    
    const [ { id }, updates ] = await Promise.all([
      bookService.validateId(req.params),
      bookService.validateBody(req.body),
    ]);

    await bookService.getById(id);

    await bookService.update({ id, ...updates });
    
    res.status(status.HTTP_OK).json({ message: message.updatedSucess });
  },
  async remove (req, res) {
    const { id } = await bookService.validateId(req.params);
    await bookService.getById(id);
    await bookService.remove(id);
    res.status(status.HTTP_OK).json({ message: message.removedSucess });
  },
};

module.exports = bookController;