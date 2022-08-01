export default class Subject {
  constructor(private _name: string) {
    this.name = _name;
  };

  get name():string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) throw new Error('Name should have at least 3 caracteres');
    this._name = value;
  }
}
