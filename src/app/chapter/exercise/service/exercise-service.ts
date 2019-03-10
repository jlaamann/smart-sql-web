import {Injectable} from "@angular/core";
import {ExerciseRepository} from "../repository/exercise-repository";
import {ExerciseResult} from "../model/exercise-result";
import {Exercise} from "../model/exercise";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private exerciseRepo: ExerciseRepository) {
  }

  validateSql(exerciseId: number, sql: string): Promise<ExerciseResult> {
    return this.exerciseRepo.validateSql(exerciseId, sql);
  }

  getExercises(chapterId: number): Promise<Exercise[]> {
    // todo fetch exercises from be
    let exercises = [];
    let ex1 = new Exercise();
    ex1.question = 'wadap mane?';
    ex1.id = 0;
    let ex2 = new Exercise();
    ex2.question = 'sup?';
    ex2.id = 1;
    exercises.push(ex1);
    exercises.push(ex2);
    return Promise.resolve(exercises);
  }
}
