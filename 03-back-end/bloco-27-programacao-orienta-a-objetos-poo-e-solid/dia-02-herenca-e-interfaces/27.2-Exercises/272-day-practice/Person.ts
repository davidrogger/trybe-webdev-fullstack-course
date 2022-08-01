class Person {
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

class Student extends Person {
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