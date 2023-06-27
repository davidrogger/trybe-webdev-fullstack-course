const fs = require('fs/promises');
const path = require('path');


async function getFileData() {
  const fileData = await fs
    .readFile(path.resolve(__dirname, './data/simpsons.json'));
  
    return JSON.parse(fileData);
}

module.exports = getFileData;
