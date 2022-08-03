import Evaluation from './Evaluation';

export default class EnvaluationResult {
  private _evaluation: Evaluation;

  constructor(evaluation: Evaluation, private _score: number) {
    this.evaluation = evaluation;
    this.score = _score;
  };

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  set evaluation(value: Evaluation) {
    this._evaluation = value;
  }

  get score() {
    return this._score;
  }

  set score(value: number) {
    this.validateScore(value);
    this._score = value;
  }

  validateScore(value: number) {
    if (value < 0) throw new Error('Score need to be a positive number');
  }
}
