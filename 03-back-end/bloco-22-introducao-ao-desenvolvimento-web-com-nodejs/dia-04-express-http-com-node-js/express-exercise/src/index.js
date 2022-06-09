const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.listen(3000, () => {
  console.log('Listening Port 3000');
});