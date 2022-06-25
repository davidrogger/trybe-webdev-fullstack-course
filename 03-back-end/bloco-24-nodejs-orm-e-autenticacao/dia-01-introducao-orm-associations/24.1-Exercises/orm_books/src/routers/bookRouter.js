const { Router } = require('express');

const bookController = require('../controllers/bookController');

const bookRouter = Router();

bookRouter.get('/', bookController.getAll); // Lista todos livros
bookRouter.get('/:id', bookController.getById); // Mostra um livro com base em seu id

module.exports = bookRouter;