const express = require('express');
const router = express.Router();

const rescue = require('express-rescue');
const errorMiddleware = require('../middlewares/error');

const Author = require('../controllers/Authors');

router.get('/', rescue(Author.getAll));
router.get('/:id', rescue(Author.findById));
router.post('/', rescue(Author.createAuthor));

router.use(errorMiddleware);

module.exports = router;