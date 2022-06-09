const express = require('express');
const fs = require('fs');

const app = express();

app.get('/simpsons', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./simpsons.json'));
  if(!data) return res.status(500).send();
  res.status(200).json(data);
});

app.listen(4000, () => {
  console.log('Listening Port 4000 open');
})