import { IFlyVehicle, IVehicle } from "./interfaces";

export default class FuturisticCar implements IFlyVehicle, IVehicle {
  drive(): void { console.log('Drive a futuristic car') };
  fly(): void { console.log('Flying a futuristic car') };
}
