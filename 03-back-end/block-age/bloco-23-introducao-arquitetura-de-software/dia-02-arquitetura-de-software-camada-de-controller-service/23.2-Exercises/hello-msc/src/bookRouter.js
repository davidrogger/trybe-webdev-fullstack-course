const express = require('express');
const router = express.Router();

const Book = require('../controllers/Book');

const errorMiddleware = require('../middlewares/error');
const rescue = require('express-rescue');

router.get('/', rescue(Book.getAll));
router.post('/', rescue(Book.create));

router.use(errorMiddleware);

module.exports = router;