const getFileData = require("./getFileData");

async function getCharacterById(id) {
  try {
    const charactersData = await getFileData();
  
    const promise = new Promise(((response, reject) => {
      const characterData = charactersData.find((character) => Number(character.id) === id)
  
      if (characterData) {
        response(characterData)
      }
  
      reject('Id not found.');
    }))
  
    return promise;
  } catch (e) {
    console.error(e);
  }
}

module.exports = getCharacterById;
