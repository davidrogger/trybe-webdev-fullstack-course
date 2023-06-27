const fs = require('fs/promises');
const database = require('./connection.model');

async function createActivity(activity) {
  const data = await database.getAllData();

  data.activities.push(activity);
  const updatedData = JSON.stringify(data);

  await fs.writeFile(database.PATH, updatedData);

  return activity;
}

module.exports = {
  createActivity,
};
