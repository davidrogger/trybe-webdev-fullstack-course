class Training {

  constructor(private _name: string) {
    this._name = _name;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

}

const david = new Training('david');

console.log(david);