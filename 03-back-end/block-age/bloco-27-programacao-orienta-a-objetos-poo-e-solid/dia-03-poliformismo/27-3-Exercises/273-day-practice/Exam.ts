import Teacher from './Teacher';
import Evaluation from './Evaluation';

export default class Exam extends Evaluation {
  constructor(teacher: Teacher, score: number) {
    super(score, teacher)
  }

  set score(value: number) {
    this.validateScore(value);
    super.score = value;
  }

  validateScore(value: number): void {
    if (value > 25) throw new Error('THe score should not be bigger than 25');
  }
}