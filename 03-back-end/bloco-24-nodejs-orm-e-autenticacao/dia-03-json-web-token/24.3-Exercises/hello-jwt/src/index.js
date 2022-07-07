const express = require('express');

const PORT = process.env.PORT || 3000

const userRoute = require('./routes/user.route');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use('/user', userRoute);
app.use(errorHandler);

app.listen(PORT, console.log(`Listening at port ${PORT}`));