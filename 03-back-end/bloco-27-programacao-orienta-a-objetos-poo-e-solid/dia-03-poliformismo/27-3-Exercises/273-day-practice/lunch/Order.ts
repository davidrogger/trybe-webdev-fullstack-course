import Person from '../Person';
import OrderItem from './OrderItem';

export default class Order {
  constructor(
    private _client: Person,
    private _items: OrderItem[],
    private _paymentMethod: string,
    private _discount: number = 0
    ) {
      this.client = _client;
      this.items = _items;
      this.paymentMethod = _paymentMethod;
      this.discount = _discount;
    }

    get client(): Person {
      return this._client;
    }

    set client(value: Person) {
      this._client = value;
    }

    get items(): OrderItem[] {
      return this._items;
    }

    set items(value: OrderItem[]) {
      if (value.length === 0) throw new Error('You need at least an item');
      this._items = value;
    }

    get paymentMethod(): string {
      return this._paymentMethod;
    }

    set paymentMethod(value: string) {
      if (!['cash', 'card', 'ticket'].includes(value)) throw new Error('We only accept cash, card ou ticket as payment.');
      this._paymentMethod = value;
    }

    get discount(): number {
      return this._discount;
    }

    set discount(value: number) {
      if (value < 0) throw new Error('Discount should be positive');
      this._discount = value;
    }

    calculateTotal(): number {
      return this._items.reduce((acc, item) => acc + item.price, 0);
    }

    calculateTotalWithDiscount(): number {
      return this.calculateTotal() - ( this.calculateTotal() * this._discount );
    }
}