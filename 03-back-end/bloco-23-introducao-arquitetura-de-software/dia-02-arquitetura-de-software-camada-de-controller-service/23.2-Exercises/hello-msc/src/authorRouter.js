const express = require('express');
const router = express.Router();

const Author = require('../controllers/Authors');

router.get('/', Author.getAll);
router.get('/:id', Author.findById)
router.post('/', Author.createAuthor);

module.exports = router;