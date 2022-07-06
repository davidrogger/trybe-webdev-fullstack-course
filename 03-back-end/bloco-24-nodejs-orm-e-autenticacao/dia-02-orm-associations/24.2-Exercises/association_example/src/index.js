const express = require('express');
require('express-async-errors');
const app = express();

const employeeRouter = require('./routers/employee.router');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

app.use('/employees', employeeRouter);
app.use(errorHandler);

const PORT = Number(process.env.PORT || 4000);

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));

module.exports = app;