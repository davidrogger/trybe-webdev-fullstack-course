import express from "express";
import plantRoute from "../routes/plant.route";
const app = express();

app.use(express.json());
app.use('/plants', plantRoute);

export default app;