const fs = require('fs/promises');
const { resolve } = require('path');

const dataPath = resolve(__dirname, '../../db/cacau_store.json');

async function readCacauFile() {
  return JSON.parse(await fs.readFile(dataPath));
}

async function getAllChocolates() {
  const dataFile = await readCacauFile();
  return dataFile.chocolates;
}

module.exports = {
  getAllChocolates,
};
