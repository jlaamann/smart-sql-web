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
    return this.exerciseRepo.getExercisesByChapterId(chapterId);
  }
}
