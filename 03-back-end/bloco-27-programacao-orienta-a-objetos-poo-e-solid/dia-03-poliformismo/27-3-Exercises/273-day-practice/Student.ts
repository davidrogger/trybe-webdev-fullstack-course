import Person from './Person';
import Enrollable from './Enrollable.interface';

export default class Student extends Person implements Enrollable {
  private _enrollment: string = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(
    name: string,
    birthDate: Date,
    ){
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length < 4) throw new Error('Student need to have at least 4 exames grades');
    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length < 2) throw new Error('Studant need to have at least 2 works grades');
    this._worksGrades = value;
  }

  get enrollment() {
    return this._enrollment;
  }

  sumGrades(): number {
    return [...this._examsGrades, ...this._worksGrades]
      .reduce((acc, grade) => acc + grade , 0);
  }

  sumAverageGrades(): number {
    const totalGradesQt = [...this._examsGrades, ...this._worksGrades].length
    return this.sumGrades() / totalGradesQt;
  }

  generateEnrollment():string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}
