const express = require('express');

const app = express();
app.use(express.json());

const salesRouter = require('./salesRouter');

app.use('/sales', salesRouter);

app.listen(4000, () => { console.log('Listening at port 4000'); });