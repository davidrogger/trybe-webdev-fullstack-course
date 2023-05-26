import Teacher from './Teacher';

export default class Evaluation {
  private _teacher: Teacher;

  constructor(private _score: number, teacher: Teacher) {
    this._teacher = teacher;
    this.score = _score;
  }

  get teacher() {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }

  get score() {
    return this._score;
  }

  set score(value: number) {
    this.validateScore(value);
    this._score = value;
  }

  validateScore(value: number): void {
    if (value < 0) throw new Error('Score should be a positive number');
  }
}