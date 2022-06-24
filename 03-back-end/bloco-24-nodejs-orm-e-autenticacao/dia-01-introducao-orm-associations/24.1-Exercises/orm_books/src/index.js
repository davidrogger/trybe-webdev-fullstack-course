const express = require('express');
const bookRouter = require('./routers/bookRouter');

const app = express();

const PORT = Number(process.env.PORT || 3000)

app.use(express.json());

app.use('/books', bookRouter);

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
