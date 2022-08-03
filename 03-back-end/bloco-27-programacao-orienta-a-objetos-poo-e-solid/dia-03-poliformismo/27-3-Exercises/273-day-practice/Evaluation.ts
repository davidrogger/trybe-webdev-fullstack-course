import Teacher from './Teacher';

export default class Evaluation {
  private _teacher: Teacher;

  constructor(private _score: number, teacher: Teacher, private _type: string) {
    this._teacher = teacher;
    this.score = _score;
    this.type = _type;
  }

  get teacher() {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }

  get type() {
    return this._type;
  }

  set type(value: string) {
    this.validateType(value);
    this._type = value;
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
    if (this._type === 'avaliation' && value > 25) throw new Error('Avaliation should not be above 25 points');
    if (this._type === 'work' && value > 50) throw new Error('Work should not be above 50 points');
  }

  validateType(value: string): void {
    const valueLower = value.toLowerCase();
    if (!['avaliation', 'work'].includes(valueLower)) throw new Error('Only avaliation or work are availible to type');
  }
}