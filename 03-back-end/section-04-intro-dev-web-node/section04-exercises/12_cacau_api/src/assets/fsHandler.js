const fs = require('fs/promises');
const { resolve } = require('path');

const dataPath = resolve(__dirname, '../../db/chocolates.json');

async function getAllChocolates() {
  return JSON.parse(fs.readFile(dataPath));
}

module.exports = {
  getAllChocolates,
};
