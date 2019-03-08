import {Injectable} from "@angular/core";
import {ExerciseRepository} from "../repository/exercise-repository";
import {ExerciseResult} from "../model/exercise-result";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private exerciseRepo: ExerciseRepository) {
  }

  validateSql(sql: string): Promise<ExerciseResult> {
    return this.exerciseRepo.validateSql(sql);
  }
}
