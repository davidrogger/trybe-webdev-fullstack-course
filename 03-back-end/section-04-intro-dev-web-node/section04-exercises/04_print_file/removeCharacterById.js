const fs = require("fs/promises");
const getCharacterById = require("./getCharacterById");
const getFileData = require("./getFileData");
const path = require("path");

async function removeCharacterById(id) {
  try {
    const charactersData = await getFileData();
    await getCharacterById(id);

    const characterIndex = charactersData.findIndex((character) => Number(character.id) === id);

    charactersData.splice(characterIndex, 1);

    await fs
      .writeFile(
        path.resolve(__dirname, './data/simpsons.json'),
        JSON.stringify(charactersData),
      );

    console.log('Character removed with success!');
  } catch (e) {
    console.error(e)
  }

}

module.exports = removeCharacterById;
