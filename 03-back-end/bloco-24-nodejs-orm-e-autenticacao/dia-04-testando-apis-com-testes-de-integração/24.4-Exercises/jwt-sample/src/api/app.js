const express = require('express');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes')
const errorHandler = require('./middlewares/errorHandler');
const authentication = require('./middlewares/authentication');

const app = express();

app.use(express.json());
app.use('/user', userRoutes);
app.use(authentication);
app.use('/post', postRoutes);
app.use(errorHandler);

module.exports = app;

