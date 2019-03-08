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

  readonly RESULT_MESSAGE_TIMEOUT = 5000;

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
      }, this.RESULT_MESSAGE_TIMEOUT);
    });
  }

  showLastResult(): boolean {
    return this.lastResult !== undefined && (this.hasNotTimedOutShowResult
      || this.lastResult.queryResult === QueryResult.OK);
  }

  getLastResultText(): string {
    if (this.lastResult.queryResult === QueryResult.OK) {
      return 'Õige! Võid järgmise ülesande juurde minna!'; // todo: kuvada teine tekst, kui ylesanded otsas
    } else {
      return 'Vale! Proovi uuesti!';
    }
  }
}
