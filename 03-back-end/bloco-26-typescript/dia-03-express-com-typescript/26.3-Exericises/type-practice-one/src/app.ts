import { Router } from 'express';
import UserRoute from './routes/user.route';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';

const app = Router();

app.use(UserRoute)
app.use(errorHandler)

export default app;