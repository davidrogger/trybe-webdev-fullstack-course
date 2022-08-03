import Person from "../Person";
import Order from "./Order";

export default class OrderRespository {
  
  constructor(private _orders: Order[]) {
    this.orders = _orders;
  }

  public get orders(): Order[] {
    return this._orders;
  }
  public set orders(value: Order[]) {
    this._orders = value;
  }

  public addOrder(order: Order) {
    this._orders.push(order);
  }

  public removeOrder(orderRef: Order) {
    const orderIndex = this._orders.findIndex((order) => order.id === orderRef.id);
    this._orders.splice(orderIndex, 1);
  }

  public listByClient(client: string): Order[] {
    return this._orders.filter((order) => order.client.name === client);
  }

  public listBySortedValue(orderBy: string): Order[] {
    return this._orders.sort((a, b) => {
      if (orderBy === 'menor') {
        return a.calculateTotal() - b.calculateTotal()
      } else {
        return b.calculateTotal() - a.calculateTotal()
      }
    });
    
  }
}