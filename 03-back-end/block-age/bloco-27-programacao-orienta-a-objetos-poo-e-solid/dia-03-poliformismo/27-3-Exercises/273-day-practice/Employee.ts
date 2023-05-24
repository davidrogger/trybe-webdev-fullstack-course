import Enrollable from './Enrollable.interface';
import Person from './Person';

export default class Employee extends Person implements Enrollable {
  private _enrollment = String();
  private _salary: number = 0;

  constructor(
    name: string,
    birthDate: Date,
    salary: number,
    private _admissionDate = new Date()
    ) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
    this.salary = salary;
    this.admissionDate = _admissionDate;
  }

  get enrollment() {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    this.validateAdmissionDate(value);
    this._admissionDate = value;
  }

  get salary(): number {
    return this._salary;
  }

  validateAdmissionDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('Addmission shouldn\'t be in the future');
  }

  set salary(value: number) {
    this.validateSalary(value);
    this._salary = value;
  }

  validateSalary(value: number): void {
    if (value < 0) throw new Error('Salary should be positive');
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}
