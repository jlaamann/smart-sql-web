import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ExerciseResult} from "../model/exercise-result";
import {ExerciseValidationModel} from "../model/exercise-validation-model";
import {map} from "rxjs/operators";
import {StatementType} from "../model/statement-type";

@Injectable()
export class ExerciseRepository {

  protected url = '/api/exercise';

  constructor(private http: HttpClient) {}

  validateSql(exerciseId: number, sql: string): Promise<ExerciseResult> {
    const validation = new ExerciseValidationModel();
    validation.id = exerciseId;
    validation.sql = sql;
    validation.statementType = StatementType.SELECT;
    return this.http.post(`${this.url}`, validation)
      .pipe(map((res: ExerciseResult) => res)).toPromise();
  }
}
