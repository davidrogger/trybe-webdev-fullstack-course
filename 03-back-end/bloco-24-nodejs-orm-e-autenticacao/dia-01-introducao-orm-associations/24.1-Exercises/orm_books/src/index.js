const express = require('express');

const app = express();

const PORT = Number(process.env.PORT || 3000)

app.use(express.json());

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
