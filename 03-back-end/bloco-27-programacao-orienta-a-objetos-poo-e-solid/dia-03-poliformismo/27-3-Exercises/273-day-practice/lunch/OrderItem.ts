export default class OrderItem {
  constructor(private _name: string, private _price: number) {
    this.name = _name;
    this.price = _price;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get price() {
    return this._price;
  }

  set price(value: number) {
    this.validatePrice(value);
    this._price = value;
  }

  validateName(value: string): void {
    if (value.length < 3) throw new Error('Name should be bigger than 3');
  }

  validatePrice(value: number): void {
    if (value < 0) throw new Error('Price should be positive');
  }

}
