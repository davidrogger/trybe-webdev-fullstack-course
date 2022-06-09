const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const users = { "name": ''};

app.use(bodyParser.json())

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}` })

});

app.listen(3000, () => {
  console.log('Listening Port 3000');
});