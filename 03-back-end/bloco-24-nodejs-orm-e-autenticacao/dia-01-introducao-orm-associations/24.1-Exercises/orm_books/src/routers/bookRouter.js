const { Router } = require('express');

const bookController = require('../controllers/bookController');

const bookRouter = Router();

bookRouter.get('/', bookController.getAll); // Lista todos livros
bookRouter.get('/:id', bookController.getById); // Mostra um livro com base em seu id
bookRouter.post('/', bookController.create); // Cadastra no banco de dados um novo livre com base no corpo do post
bookRouter.put('/:id', bookController.update) // Atualiza informações com base no corpo, de um livro pelo ID infornecido.

module.exports = bookRouter;