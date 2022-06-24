const { Router } = require('express');

const bookController = require('../controllers/bookController');

const bookRouter = Router();

bookRouter.get('/', bookController.getAll);

module.exports = bookRouter;