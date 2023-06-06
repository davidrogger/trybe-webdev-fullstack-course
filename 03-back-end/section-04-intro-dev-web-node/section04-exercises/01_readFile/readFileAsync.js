const fs = require('fs/promises');

const fileData = {
  path: './myFile.txt',
  code: 'utf8'
}

fs.readFile(fileData.path, fileData.code)
  .then(response => console.log(response))
  .catch(e => console.error('Error: %s', e.path));

// ou

async function main() {
  try {
    const data = await fs.readFile(fileData.path, fileData.code);
    console.log(data);
  } catch (e) {
    console.error('Error: %s', e.path);
  }
}

module.exports = fileData;