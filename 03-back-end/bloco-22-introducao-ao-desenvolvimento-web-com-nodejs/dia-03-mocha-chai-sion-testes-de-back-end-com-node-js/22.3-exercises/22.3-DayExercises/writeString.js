const fs = require('fs');

const writeString = (filePathAndName, fileContent) => {
  
  const paraMeterIsNoTValid = (!filePathAndName || !fileContent);
  if(paraMeterIsNoTValid) throw new Error('The function should receive two parameters.');

  fs.writeFileSync(filePathAndName, fileContent);
  return 'ok';
}

module.exports = writeString;