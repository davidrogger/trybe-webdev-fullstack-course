const { questionInt } = require('readline-sync');
const fs = require('fs').promises;

const readFile = async (answer) => {
  try {
    const content = await fs.readFile(answer, 'utf-8');
    return `File content "${content}"`;
  } catch (err) {
    console.log(`Something went wrong. ${err}`);
  }
}

const questions = async () => {
  const files = [1, 2, 3, 4, 5];
  console.log('Files Avalibles:')
  const fileNames = files.map((number) => {
    const fileName = `file${number}.txt`;
    console.log(`${number} - ${fileName}`)
    return fileName;
  });
  const response = questionInt('Wich file do you want to read? 1? ')
  if(response > 5) throw new Error('Please insert a valid number');
  const fileContent = await readFile(fileNames[response - 1]);
  console.log(fileContent);

}


questions();