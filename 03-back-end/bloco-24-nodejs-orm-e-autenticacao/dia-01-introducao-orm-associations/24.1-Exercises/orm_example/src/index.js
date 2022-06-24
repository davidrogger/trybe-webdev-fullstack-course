const express = require('express');
const app = express();

const PORT = Number(process.env.PORT || 3000);

const userRouter = require('../routers/userRouters');
const errorMiddleware = require('../middlewares/errorMiddleware');

app.use(express.json());

app.use('/user', userRouter);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));

