export default class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  };

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date){
    const today = new Date();
    if (today < value) throw new Error('Date shouldn\'t be in the future');
    const timeDiff = Math.abs(today.getTime() - value.getTime()); // diferença em milissegundos
    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    if (age > 120) throw new Error('Shouldn\'t have more than 120 years');
    this._birthDate = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) throw new Error('Name minimum lenght is 3');
    this._name = value;
  }
}
