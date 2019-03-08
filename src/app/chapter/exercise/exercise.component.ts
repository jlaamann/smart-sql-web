import {Component, Input, OnInit} from '@angular/core';
import {ExerciseService} from "./service/exercise-service";
import {ExerciseResult} from "./model/exercise-result";
import {QueryResult} from "./model/query-result";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  @Input() chapterId: number;
  lastResult: ExerciseResult = undefined;
  hasNotTimedOutShowResult = false;

  readonly TIMEOUT_LENGTH = 5000; // time in ms that the result of the query appears on screen

  constructor(private exerciseService: ExerciseService) {
  }

  ngOnInit() {
  }

  runSQL(query) {
    console.log(query);
    this.exerciseService.validateSql(query).then(res => {
      this.lastResult = res;
      this.hasNotTimedOutShowResult = true;
      setTimeout(() => {
        this.hasNotTimedOutShowResult = !this.hasNotTimedOutShowResult;
      }, this.TIMEOUT_LENGTH);
    });
  }

  showLastResult(): boolean {
    return this.lastResult !== undefined && this.hasNotTimedOutShowResult;
  }

  getLastResultText(): string {
    if (this.lastResult.queryResult === QueryResult.OK) {
      return 'Õige!;';
    } else {
      return 'Vale! Proovi uuesti!';
    }
  }
}
