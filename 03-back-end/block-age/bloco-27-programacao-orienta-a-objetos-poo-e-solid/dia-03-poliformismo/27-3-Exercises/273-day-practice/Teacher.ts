import Employee from "./Employee";
import Subject from "./Subject";

export default class Teacher extends Employee {
  constructor(name: string, birthDay: Date, salary: number, private _subject: Subject) {
    super(name, birthDay, salary);
    this.subject = _subject;
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }
}
