import { IFlyVehicle } from "./interfaces";

export default class AirPlane implements IFlyVehicle{
  fly(): void {
    console.log('Flaying an AirPlane');
  }
}
