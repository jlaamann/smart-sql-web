import {QueryResult} from "./query-result";

export class ExerciseResult {

  constructor(queryResult: QueryResult) {
    this.queryResult = queryResult;
  }

  queryResult: QueryResult = undefined;
}
