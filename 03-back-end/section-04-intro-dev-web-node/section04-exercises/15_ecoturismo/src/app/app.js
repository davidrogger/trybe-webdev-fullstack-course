const express = require('express');
const http = require('../assets/httpStatus');

const activityService = require('../services/activity.service');

const app = express();
app.use(express.json());

app.post('/activities', async (req, res, next) => {
  const payload = req.body;

  const activity = await activityService.createNewActivity(payload);

  if (activity) {
    res.status(http.CREATED).json({ message: 'Activity successfully recorded' });
  } else {
    next();
  }
});

module.exports = app;
