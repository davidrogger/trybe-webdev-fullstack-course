import { Router, json } from 'express';
import UserRoute from './routes/user.route';
import errorHandler from './middlewares/errorHandler';

const app = Router();

app.use(json());
app.use(UserRoute)
app.use(errorHandler)

export default app;