const express = require('express');

const Author = require('../models/Author');
const Book = require('../models/Books');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

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

app.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  if (!Author.isValid(firstName, middleName, lastName)) return res.status(400).json({ message: 'Invalid data' });

  await Author.create(firstName, middleName, lastName);
  res.status(201).json({ message: 'Created with success!' });

});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.findById(id);

  if (!book) return res.status(404).json({ message: 'Not Found' });

  res.status(200).json(book);

});

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();
  const booksTitle = books.map((book) => ({ title: book.title}))
  res.status(200).json(booksTitle);
});


app.listen(PORT, () => {
  console.log(`Listening at PORT ${PORT}`);
});
