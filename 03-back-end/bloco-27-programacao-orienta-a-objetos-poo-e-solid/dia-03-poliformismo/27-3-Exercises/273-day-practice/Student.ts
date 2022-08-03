import Person from './Person';
import Enrollable from './Enrollable.interface';
import EvaluationResult from './EvaluationResult';

export default class Student extends Person implements Enrollable {
  private _enrollment: string = String();
  private _evaluationsResults: EvaluationResult[];

  constructor(
    name: string,
    birthDate: Date,
    ){
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._evaluationsResults = [];
  }

  get evaluationsResults() {
    return this._evaluationsResults;
  }

  get enrollment() {
    return this._enrollment;
  }

  sumGrades(): number {
    return this._evaluationsResults
      .reduce((acc, grade) => acc + grade.score , 0);
  }

  sumAverageGrades(): number {
    const totalGradesQt = this._evaluationsResults.length
    return this.sumGrades() / totalGradesQt;
  }

  addEvaluationResult(value: EvaluationResult): void {
    this._evaluationsResults.push(value);
  }

  generateEnrollment():string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
}
