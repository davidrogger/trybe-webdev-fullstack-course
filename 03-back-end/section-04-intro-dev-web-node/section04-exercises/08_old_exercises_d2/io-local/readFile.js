// first model
// const fs = require('fs');

// const fileName = 'my-file.txt';

// fs.readFile(fileName, 'utf8', (err, data) => {
//   if(err) {
//     console.log(`It\'s impossible to read the file ${fileName}\n Error: ${err}`);
//     process.exit(1);
//   }
//   console.log(`File content: ${data}`);
// });

// second model
// const fs = require('fs').promises;

// const fileName = 'my-file.txt';

// fs.readFile(fileName, 'utf8')
//   .then((data) => console.log(`File content: ${data}`))
//   .catch((err) => {
//     console.error(`It was not possible to read the file ${fileName}\n Error: ${err}`);
//     process.exit(1); // ends the script execution and report the system about the error.
//   });

// third model

const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file2.byteLength;
    console.log(`Read three files total ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Error reading file: ${err.message}`);
  });
