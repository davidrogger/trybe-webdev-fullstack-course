const express = require('express');
const http = require('../assets/httpStatus');

const activityService = require('../services/activity.service');
const validations = require('../middleware/validation.middlware');
const errorHandler = require('../middleware/error.middlware');

const app = express();
app.use(express.json());

app.use(validations);

app.post('/activities', async (req, res, next) => {
  const payload = req.body;

  const activity = await activityService.createNewActivity(payload);

  if (activity) {
    res.status(http.CREATED).json({ message: 'Activity successfully recorded' });
  } else {
    next();
  }
});

app.use(errorHandler);

module.exports = app;
