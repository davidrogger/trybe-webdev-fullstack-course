const fs = require('fs').promises;

fs.writeFile('./my-file.txt', 'my text')
  .then(() => console.log('File sucessfull write'))
  .catch((err) => console.log(`Erro writing the file: ${err.message}`)
  );