const express = require('express');
const fs = require('fs');

const app = express();

const fileName = './simpsons.json';

const data = JSON.parse(fs.readFileSync(fileName));

app.use(express.json());

app.get('/simpsons', (req, res) => {
  if(!data) return res.status(500).send();
  res.status(200).json(data);
});

app.post('/simpsons', (req, res) => {

  const reqValidation = Object.keys(req.body);
  const maxKeys = 2;
  if(reqValidation.length > maxKeys) return res.status(500).json({ message: 'Exceeded the value of keys needed' });

  const { id, name } = req.body;

  const indexId = data.findIndex(( item ) => item.id === id);
  const idNotFound = -1;
  if(indexId !== idNotFound) return res.status(409).json({ message: `id ${id} already exists` });

  const newData = [...data, { id, name }];
  fs.writeFileSync(fileName, JSON.stringify(newData));
  // res.status(200).json({ message: `${name} add with sucess!` });
  res.status(204).end();

});

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  const indexId = data.findIndex(( item ) => item.id === id);
  
  const idNotFound = -1;
  if(indexId === idNotFound) return res.status(404).json({ message: `Id ${id} Not Found` });

  const idFound = data[indexId];

  res.status(200).json(idFound);
});

app.listen(4000, () => {
  console.log('Listening Port 4000 open');
})