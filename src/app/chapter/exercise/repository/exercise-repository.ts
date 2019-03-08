import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ExerciseResult} from "../model/exercise-result";

@Injectable()
export class ExerciseRepository {

  protected url = 'api/exercise/';

  constructor(private http: HttpClient) {}

  validateSql(sql: string): Promise<ExerciseResult> {
    return this.http.get<ExerciseResult>(`${this.url}/test`).toPromise();
  }
}
