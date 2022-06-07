const fs = require('fs').promises;

const simpsonsNames = './simpsons.json';

// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
// function readNames() {
//   fs.readFile(simpsonsNames, 'utf-8')
//     .then((fileContent) => JSON.parse(fileContent))
//     .then((result) => result.forEach(({ id, name }) => console.log(`${id} - ${name}`)));
// }

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

// function idData(id) {

//   return new Promise((resolve, reject) => {
//     fs.readFile(simpsonsNames, 'utf-8')
//       .then((fileContent) => JSON.parse(fileContent))
//       .then((response) => {
//         const idPosition = response.findIndex((idResponse) => id === idResponse.id);        
//         const idNotFound = -1;
//         if(idPosition === idNotFound) reject(new Error(`Id(${id}) not found`));
//         return resolve(`${id} - ${response[idPosition].name}`);
//       })    
//   })

// }

// console.log(idData('51')); retorna um erro not found
// idData('1').then((response) => response);

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

// function alterData() {

//     fs.readFile(simpsonsNames, 'utf-8')
//       .then((namesList) => JSON.parse(namesList))
//       .then((names) => {
//         const idToRemove = ['10', '6'];
//         const idPositions = idToRemove.map((removeId) => names.findIndex(({ id }) => removeId === id));
//         idPositions.forEach((idPosition) => {
//           names.splice(idPosition, 1);
//         })
//         const newListNames = JSON.stringify(names);
//         fs.writeFile(simpsonsNames, newListNames)
//           .then(() => console.log('File overwrite successfulled'))
//           .catch((err) => console.log(`Fail to write the file \n Error: ${err}`))
//       });

// };

// alterData();

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

// function copyFile()  {

//   fs.readFile(simpsonsNames, 'utf-8')
//     .then((stringNamesList) => JSON.parse(stringNamesList))
//     .then((namesList) => {
//       const idMaxToColetct = 4;
//       const simpsonFamily = namesList.filter(({ id }) => id <= idMaxToColetct);
//       return fs.writeFile('simpsonFamily.json', JSON.stringify(simpsonFamily))
//     .then(() => console.log(`File create with success!`))
//     .catch((err) => console.log(`Something went wrong. \n Error: ${err}`));
//     })

// }

// copyFile();

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

// function extraCaracter(newName) {
//   const simpsonsFamily = './simpsonFamily.json';
//   fs.readFile(simpsonsFamily, 'utf-8')
//     .then((stringNamesList) => JSON.parse(stringNamesList))
//     .then((namesList) => {
//       const lastId = namesList.length + 1;
//       const newMember = {id: lastId, name: newName};
//       const newNamesList = [...namesList, newMember];
//       fs.writeFile(simpsonsFamily, JSON.stringify(newNamesList))
//       .then(() => console.log('Member add with success!'))
//     .catch((err) => console.log(`Something went wrong. \n Error: ${err}`));
//     });
// }

// extraCaracter('Nelson Muntz');

// function replaceCaracter(oldName, newName) {
  
//     const simpsonFamily = './simpsonFamily.json';
//     fs.readFile(simpsonFamily, 'utf-8')
//       .then((stringNamesList) => JSON.parse(stringNamesList))
//       .then((namesList) => {
//         const nameNotFound = -1;
//         const namePosition = namesList.findIndex(({ name }) => name === oldName);
//         if(namePosition === nameNotFound) throw(new Error(`Name ${oldName} not found`));
//         namesList.splice(namePosition, 1, {...namesList[namePosition], name: newName })
//         return namesList;
//       })
//       .then((newNamesList) => {
//         fs.writeFile(simpsonFamily, JSON.stringify(newNamesList))
//         .then(() => console.log(`Name ${oldName} replace successfully for ${newName}`))
//       })
//       .catch((err) => console.log(`Something went wrong.\n Error: ${err.message}`));

// }

// replaceCaracter('Nelson Muntz', 'Maggie Simpson');