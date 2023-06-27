const activityModel = require('../models/activity.model');

async function createNewActivity(activity) {
  const activityCreated = await activityModel.createActivity(activity);

  return activityCreated;
}

module.exports = {
  createNewActivity,
};
