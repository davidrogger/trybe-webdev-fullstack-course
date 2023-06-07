const createSimpsonsFamily = require("./data/createSimpsonsFamily");
const getCharacterById = require("./getCharacterById");
const getFileData = require("./getFileData");
const removeCharacterById = require("./removeCharacterById");

async function main() {
  try {
    await createSimpsonsFamily();
  } catch (e) {
    console.error(e);
  }

}

main();
