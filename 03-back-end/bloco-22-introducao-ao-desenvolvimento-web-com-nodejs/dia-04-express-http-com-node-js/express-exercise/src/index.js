const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

const users = { "name": ''};

app.use(express.json())

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}` })

});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (Number(age) > 17) return res.status(200).json({ message: `Hello, ${name}!` });
  res.status(401).json({ message: 'Unauthorized' });
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.listen(3000, () => {
  console.log('Listening Port 3000');
});