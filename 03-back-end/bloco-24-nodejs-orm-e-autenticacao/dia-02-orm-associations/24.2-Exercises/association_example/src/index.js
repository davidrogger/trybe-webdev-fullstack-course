const express = require('express');
const app = express();

const employeeRouter = require('./routers/employee.router');

app.use(express.json());

app.use('/employees', employeeRouter);

const PORT = Number(process.env.PORT || 4000);

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));