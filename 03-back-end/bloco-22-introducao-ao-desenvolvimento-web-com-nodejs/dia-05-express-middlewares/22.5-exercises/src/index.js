const express = require('express');

const app = express();
app.use(express.json());

const salesRouter = require('../exercise01/salesRouter');

app.use('/sales', salesRouter);

app.listen(4000, () => { console.log('Listening at port 4000'); });