const express = require('express');
require('express-async-errors');
const http = require('../assets/httpStatus');

const activityService = require('../services/activity.service');
const tokenService = require('../services/token.service');

const activityValidations = require('../middleware/activities.validation');
const signupValidations = require('../middleware/signup.validation');
const errorHandler = require('../middleware/errors.response');

const app = express();
app.use(express.json());

app.post('/signup', [signupValidations, async (req, res, next) => {
  const { user } = req.session;
  const token = tokenService.generateToken();

  if (user) {
    res.status(http.OK).json({ token });
  } else {
    next();
  }
}]);

app.post('/activities', [activityValidations, async (req, res, next) => {
  const payload = req.body;

  const activity = await activityService.createNewActivity(payload);

  if (activity) {
    res.status(http.CREATED).json({ message: 'Activity successfully recorded' });
  } else {
    next();
  }
}]);

app.use(errorHandler);

module.exports = app;
