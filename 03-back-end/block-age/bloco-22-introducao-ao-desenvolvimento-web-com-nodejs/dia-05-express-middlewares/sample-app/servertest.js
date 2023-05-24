const express = require('express');
const app = express();

// app.use(express.json());

app.post('/hello', (req, res) => {
  // req.body agora está disponível
  res.status(200).json({ greeting: `Hello, ${req.body.name}!` }); // sem a linha 4 o body é undefined
});

app.listen(3000, () => { console.log('Ouvindo na porta 3000'); });