const express = require('express');
const peopleRoutes = require('./routes/people.route');

const app = express();

app.use(express.json());

app.use('/people', peopleRoutes);

module.exports = app;
