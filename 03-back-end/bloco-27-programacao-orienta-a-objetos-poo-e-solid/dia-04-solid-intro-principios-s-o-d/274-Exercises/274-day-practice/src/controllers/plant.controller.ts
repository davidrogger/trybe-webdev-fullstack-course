import { Request, Response } from "express";
import plantService from "../services/plant.service";

export default class plantController {
  constructor(private _plantService = new plantService()) {};

  getAll = async (_req: Request, res: Response): Promise<void> => {
    const plants = await this._plantService.getAll();
    res.json(plants);
  }
}