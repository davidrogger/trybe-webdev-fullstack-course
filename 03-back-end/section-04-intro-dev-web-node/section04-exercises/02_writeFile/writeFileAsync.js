const fs = require('fs/promises');

const newFile = {
  path: 'newFile.txt',
  content: 'novo texto :D'
}

fs.writeFile(newFile.path, newFile.content, { flag: 'wx' })
  .then(() => console.log('File created'))
  .catch(e => console.error(e));


  // ou

  async function main() {
    try {
      await fs.writeFile(newFile.path, newFile.content)
      console.log('Created successfully');
    } catch (e) {
      console.error('Something went wrong: %s', e.path);
      console.log(e);
    }
  }