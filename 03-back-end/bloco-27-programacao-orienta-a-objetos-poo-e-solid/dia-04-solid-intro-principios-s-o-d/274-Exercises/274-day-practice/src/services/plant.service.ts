import IPlant from '../interfaces/Plant';
import Plants from '../models/plants';

export default class plantService {
  constructor(private _plantModel = new Plants()) { };

  async getAll(): Promise<IPlant[]> {
    const plants = await this._plantModel.getPlants();
    return plants;
  }
}