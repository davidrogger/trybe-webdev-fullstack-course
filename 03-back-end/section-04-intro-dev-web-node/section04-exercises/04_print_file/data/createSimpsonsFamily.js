const fs = require('fs/promises');
const getFileData = require("../getFileData");

async function createSimpsonsFamily() {
  try {
    const charactersData = await getFileData();
  
    const simpsonsFamily = charactersData.filter((character) => {
      const isSimpsons = character.name.toLowerCase().includes('simpson');
      return isSimpsons;
    });
  
    await fs.writeFile('./data/simpsonsFamily.json', JSON.stringify(simpsonsFamily));
    console.log('File Created with success!');
  } catch (e) {
    console.error('SOMETHING WENT WRONG!: %s', e);
  }
}

module.exports = createSimpsonsFamily;
