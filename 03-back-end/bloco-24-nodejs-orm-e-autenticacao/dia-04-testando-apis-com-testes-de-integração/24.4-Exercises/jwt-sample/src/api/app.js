const express = require('express');
const userRoutes = require('../routes/user.routes');
const errorHandler = require('../middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use('/user', userRoutes);
app.use(errorHandler);

module.exports = app;

