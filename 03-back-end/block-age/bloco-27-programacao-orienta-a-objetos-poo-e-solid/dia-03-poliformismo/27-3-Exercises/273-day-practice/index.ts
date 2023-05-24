import Student from './Student';
import Subject from './Subject';
import Teacher from './Teacher';
import Exam from './Exam';
import Work from './Work';
import EvaluationResult from './EvaluationResult';

const carolina = new Student('Carolina', new Date('2000'));

const math = new Subject('Matemágica');

const beth = new Teacher('Beth', new Date('1980'), 3000, math);

const examMath = new Exam(beth, 25);
const workMath = new Work(beth, 0);

carolina.addEvaluationResult(new EvaluationResult(workMath, 50));

console.log(carolina);