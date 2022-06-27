const express = require('express');
require('express-async-errors');

const bookRouter = require('./routers/bookRouter');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

const PORT = Number(process.env.PORT || 3000)

app.use(express.json());

app.use('/books', bookRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
