import { Router } from "express";
import plantController from "../controllers/plant.controller";

const plantRoute = Router();
const plantControler = new plantController();

plantRoute.get('/', plantControler.getAll);
console.log('iueee')

export default plantRoute;