import Person from "./Person";
import Employee from './employee.interface';
import Subject from "./Subject";

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration = String();
  private _admissionDate: Date;

  constructor(
    name: string, birthDate: Date,
    subject: Subject,
    private _salary: number,
    ) {
    super(name, birthDate);
    this._subject = subject;
    this.salary = _salary;
    this._admissionDate = new Date();
    this.registration = this.generateRegistration();
  }
  
  get subject() : Subject{
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  changeSubject(value: Subject) {
    this._subject = value;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    this._registration = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('Admission shoudn\'t be in the future date.')
    this._admissionDate = value;
  }
  
  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}

const matematica = new Subject('Matemática');
const maria = new Teacher('Maria', new Date('1980-05-07'), matematica, 2000);
console.log(maria);
const historia = new Subject('História');
maria.changeSubject(historia);
console.log(maria);