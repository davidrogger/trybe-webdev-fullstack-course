const fs = require('fs/promises');
const { resolve } = require('path');
const { NotFoundError } = require('../errors/NotFoundError');

const dataPath = resolve(__dirname, '../../db/cacau_store.json');

async function readCacauFile() {
  return JSON.parse(await fs.readFile(dataPath));
}

async function getAllChocolates() {
  const dataFile = await readCacauFile();
  return dataFile.chocolates;
}

async function getChocolateById(id) {
  const dataFile = await readCacauFile();
  const chocolateFound = dataFile.chocolates.find(
    (chocolate) => chocolate.id === Number(id),
  );

  if (!chocolateFound) throw new NotFoundError('Chocolate ID not found');

  return chocolateFound;
}

async function brandIdExists(id) {
  const dataFile = await readCacauFile();
  const brandFound = dataFile.brands.find((brand) => brand.id === Number(id));

  if (!brandFound) throw new NotFoundError('Brand ID not found');

  return brandFound;
}

async function getChocolatesByBrandId(id) {
  const dataFile = await readCacauFile();
  const chocolatesFound = dataFile.chocolates.filter(
    (chocolate) => chocolate.brandId === Number(id),
  );
  return chocolatesFound;
}

async function getTotalChocolates() {
  const dataFile = await readCacauFile();
  return dataFile.chocolates.length;
}

module.exports = {
  getAllChocolates,
  getChocolateById,
  brandIdExists,
  getChocolatesByBrandId,
  getTotalChocolates,
};
