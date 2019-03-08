import {Injectable} from "@angular/core";
import {ExerciseRepository} from "../repository/exercise-repository";
import {ExerciseResult} from "../model/exercise-result";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private exerciseRepo: ExerciseRepository) {
  }

  validateSql(sql: string): void {
    this.exerciseRepo.validateSql(sql).then(res => console.log(res));
  }
}
