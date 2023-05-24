const fs = require('fs').promises;

fs.writeFile('./my-file.txt', 'I was here :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('File saved');
  })
  .catch((err) => {
    console.error(err);
  });