import Teacher from "./Teacher";
import Evaluation from './Evaluation';

export default class Work extends Evaluation {
  constructor(teacher: Teacher, score: number) {
    super(score, teacher);
  }

  set score(value: number) {
    if (value > 50) throw new Error('The score should be bigger than 50 points');
    super.score = value;
  }
}