const express = require('express');

const app = express();

const authorsRouter = require('./authorRouter');

const PORT = 3000;

app.use(express.json());

app.use('/authors', authorsRouter);

app.listen(PORT, () => {
  console.log(`Listening at PORT ${PORT}`);
});
