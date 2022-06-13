const express = require('express');

const app = express();
app.use(express.json());

const salesRouter = require('../exercise01/salesRouter');
const signupRouter = require('../exercise02/signup');

app.use('/sales', salesRouter);
app.use('/signup', signupRouter);

app.listen(4000, () => { console.log('Listening at port 4000'); });