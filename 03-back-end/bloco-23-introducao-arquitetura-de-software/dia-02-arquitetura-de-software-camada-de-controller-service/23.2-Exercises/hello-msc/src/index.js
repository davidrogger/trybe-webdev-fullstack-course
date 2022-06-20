const express = require('express');

const app = express();

const authorsRouter = require('./authorRouter');
const booksRouter = require('./bookRouter');

const PORT = 3000;

app.use(express.json());

app.use('/authors', authorsRouter);
app.use('/books', booksRouter)

app.listen(PORT, () => {
  console.log(`Listening at PORT ${PORT}`);
});
