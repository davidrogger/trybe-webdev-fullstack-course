const getCharacterById = require("./getCharacterById");
const getFileData = require("./getFileData");
const removeCharacterById = require("./removeCharacterById");

async function main() {
  try {
    console.log(await getFileData())
    await removeCharacterById(1);
    console.log(await getFileData())

  } catch (e) {
    console.error(e);
  }

}

main();
