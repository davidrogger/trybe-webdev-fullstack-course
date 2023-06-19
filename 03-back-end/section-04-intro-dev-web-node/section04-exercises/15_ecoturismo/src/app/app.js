const express = require('express');
const http = require('../assets/httpStatus');

const activityService = require('../services/activity.service');
const authService = require('../services/auth.service');
const tokenService = require('../services/token.service');

const activityValidations = require('../middleware/validation.middlware');
const errorHandler = require('../middleware/error.middlware');

const app = express();
app.use(express.json());

app.post('/signup', (req, res, next) => {
  const payload = req.body;

  const user = authService.signupUser(payload);
  const token = tokenService.generateToken();

  if (user) res.status(http.OK).json({ token });
  else next();
});

app.use(activityValidations);

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
