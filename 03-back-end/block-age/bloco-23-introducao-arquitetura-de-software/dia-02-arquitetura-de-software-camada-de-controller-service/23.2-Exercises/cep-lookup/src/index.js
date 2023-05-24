const express = require('express');

const app = express();

const PORT = process.env.port || 3000;

const routers = require('../routers/index');

app.use(express.json());
app.use(routers);

app.listen(PORT, () => {
  console.log(`Listening at PORT ${PORT}`);
});
