const { Router } = require('express');

const postController = require('../controllers/post.controller');

const postRoute = Router();

postRoute.get('/:id', postController.getAll)

module.exports = postRoute;