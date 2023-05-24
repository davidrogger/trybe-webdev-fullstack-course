import Person from "./Person";

export default class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

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
      return this._examsGrades;
    }

    set examsGrades(value: number[]) {
      if (value.length !== 4) throw new Error('Should have four grades');
      this._examsGrades = value;
    }

    get worksGrades(): number[] {
      return this._worksGrades;
    }

    set worksGrades(value: number[]) {
      if (value. length !== 2) throw new Error('Should have two work grades');
      this._worksGrades = value;
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

// const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));


// carolina.examsGrades = [10, 10, 10, 10]
// console.log(carolina);

// Gabarito

// ./Student.ts

// import Person from "./Person";

// export default class Student extends Person {
//   private _enrollment = String();
//   private _examsGrades: number[] = [];
//   private _worksGrades: number[] = [];

//   constructor(name: string, birthDate: Date) {
//     super(name, birthDate);
//     this.enrollment = this.generateEnrollment();
//   }

//   get enrollment(): string {
//     return this._enrollment;
//   }

//   set enrollment(value: string) {
//     if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

//     this._enrollment = value;
//   }

//   get examsGrades(): number[] {
//     return this._examsGrades;
//   }

//   set examsGrades(value: number[]) {
//     if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');

//     this._examsGrades = value;
//   }

//   get worksGrades(): number[] {
//     return this._worksGrades;
//   }

//   set worksGrades(value: number[]) {
//     if (value.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');

//     this._worksGrades = value;
//   }

//   generateEnrollment(): string {
//     const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

//     return `STU${randomStr}`;
//   }
// }

// const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));

// console.log(carolina);