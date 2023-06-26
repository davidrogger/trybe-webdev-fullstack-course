const express = require('express');
const peopleRoutes = require('./routes/people.route');
const errorsRoute = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use('/people', peopleRoutes);

app.use(errorsRoute);

module.exports = app;
