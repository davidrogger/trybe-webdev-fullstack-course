import { Router } from 'express';
import BookController from '../controllers/books.controller';

const route = Router();

const booksController = new BookController();

route.get('/books', booksController.getAll);
route.get('/book/:id', booksController.getById);

export default route;