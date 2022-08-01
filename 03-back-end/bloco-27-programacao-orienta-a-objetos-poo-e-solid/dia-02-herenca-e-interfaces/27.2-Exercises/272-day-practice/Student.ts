import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string;

  constructor(name: string, birthDate: Date) {
      super(name, birthDate);
      this.enrollment = this.enrollmentGenerator();
    };

    get enrollment():string {
      return this._enrollment;
    }

    set enrollment(value: string) {
      if (value.length < 16) throw new Error('Enrollment should have 16 caracteres');
      this._enrollment = value;
    }

    enrollmentGenerator() {
      return (
        new Date().getTime().toString() +
        new Date().getTime().toString())
        .slice(0, 16);
    }

    get examsGrades(): number[] {
      return this.examsGrades;
    }

    set examsGrades(value: number[]) {
      if (value.length !== 4) throw new Error('Should have four grades');
      this.examsGrades = value;
    }

    get worksGrades(): number[] {
      return this.worksGrades;
    }

    set worksGrades(value: number[]) {
      if (value. length !== 2) throw new Error('Should have two work grades');
      this.worksGrades = value;
    }

    sumGrades(): number {
      const totalGrades = [...this.examsGrades, ...this.worksGrades]
        .reduce((acc, grade) => acc + grade,0);
        return totalGrades;
    }

    get averageGrades(): number {
      const gradesQuantity = this.examsGrades.length + this.worksGrades.length;
      return this.sumGrades() / gradesQuantity;
    }
}

