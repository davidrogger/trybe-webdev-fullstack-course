import Employee from "./Employee";

export default class Teacher extends Employee {
  constructor(name: string, birthDay: Date, salary: number, private _subject: string) {
    super(name, birthDay, salary);
  }

  get subject(): string {
    return this._subject;
  }
}
