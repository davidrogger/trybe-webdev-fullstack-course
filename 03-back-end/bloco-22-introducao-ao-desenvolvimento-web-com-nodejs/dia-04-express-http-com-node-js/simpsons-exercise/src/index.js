const express = require('express');
const fs = require('fs');

const app = express();

const data = JSON.parse(fs.readFileSync('./simpsons.json'));

app.get('/simpsons', (req, res) => {
  if(!data) return res.status(500).send();
  res.status(200).json(data);
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