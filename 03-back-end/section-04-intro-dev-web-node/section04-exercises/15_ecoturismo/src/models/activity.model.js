const fs = require('fs/promises');
const { resolve } = require('path');

const DATABASE_PATH = resolve(__dirname, '../../db/ecoturismo.json');

async function createActivity(activity) {
  fs.writeFile(DATABASE_PATH, JSON.stringify(activity));

  return activity;
}

module.exports = {
  createActivity,
};
