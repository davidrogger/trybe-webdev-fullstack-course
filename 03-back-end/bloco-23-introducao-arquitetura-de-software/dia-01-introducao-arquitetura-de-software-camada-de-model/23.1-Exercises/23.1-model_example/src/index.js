const express = require('express');

const Author = require('../models/Author');
const Book = require('../models/Books');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not Found' });

  res.status(200).json(author);
});

app.get('/books/:id', async (req, res) => {
  const id = Number(req.params.id);
  const books = await Book.getAll();
  const booksById = books
  .filter((book) => book.author_id === id)
  .map((book) => ({ title: book.title }));
    res.status(200).json(booksById);
});

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();
  const booksTitle = books.map((book) => ({ title: book.title}))
  res.status(200).json(booksTitle);
});


app.listen(PORT, () => {
  console.log(`Listening at PORT ${PORT}`);
});
