import { Router } from 'express';
import BookController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middleware';

const route = Router();

const booksController = new BookController();

route.get('/books', booksController.getAll);
route.get('/book/:id', booksController.getById);
route.post('/book', [validationBook, booksController.create]);

export default route;