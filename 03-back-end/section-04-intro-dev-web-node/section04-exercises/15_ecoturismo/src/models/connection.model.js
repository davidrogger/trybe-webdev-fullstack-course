const fs = require('fs/promises');
const { resolve } = require('path');

const DATABASE_PATH = resolve(__dirname, '../../db/ecoturismo.json');

async function getAllData() {
  return JSON.parse(await fs.readFile(DATABASE_PATH));
}

module.exports = {
  PATH: DATABASE_PATH,
  getAllData,
};
