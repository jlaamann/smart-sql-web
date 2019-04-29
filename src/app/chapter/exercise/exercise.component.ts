import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ExerciseService} from "./service/exercise-service";
import {ExerciseResult} from "./model/exercise-result";
import {QueryResult} from "./model/query-result";
import {Exercise} from "./model/exercise";
import {NgProgress, NgProgressRef} from "@ngx-progressbar/core";
import {StatementType} from "./model/statement-type";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnChanges, OnInit {

  @Input() chapterId: number;
  exercises: Exercise[] = [];
  resultMap: { [key: number]: ExerciseResult} = {};
  showAnswerMap: { [key: number]: boolean} = {};
  columnsMap: { [key: number]: string[]} = {};
  valuesMap: { [key: number]: string[][]} = {};
  progressRef: NgProgressRef;

  // todo remove later
  cols = ['id', 'title', 'director'];
  vals = [['0', 'La Dolce Vita', 'Federico Fellini'], ['2', 'Jean Luc Godard', 'Breathless']];

  constructor(private exerciseService: ExerciseService,
              private ngProgress: NgProgress) {
  }

  ngOnInit(): void {
    this.progressRef = this.ngProgress.ref();
  }

  ngOnChanges() {
    this.loadExercises();
  }

  loadExercises(): void {
    this.exerciseService.getExercises(this.chapterId)
      .then(exercises => {
        this.exercises = exercises;
        this.exercises.forEach(ex => {
          this.resultMap[ex.id] = undefined;
          this.showAnswerMap[ex.id] = false;
        });
      });
  }

  runSQL(exerciseId, query): void {
    this.progressRef.start();
    this.resultMap[exerciseId] = undefined;
    this.exerciseService.validateSql(exerciseId, query)
      .then((res: ExerciseResult) => {
        this.progressRef.complete();
        this.resultMap[exerciseId] = res;
        this.updateConsole(exerciseId, res);
      });
  }

  updateConsole(exerciseId: number, result: ExerciseResult): void {
    this.columnsMap[exerciseId] = result.columns;
    this.valuesMap[exerciseId] = result.values;
  }

  showLastResult(exerciseId): boolean {
    return this.resultMap[exerciseId] !== undefined;
  }

  getLastResultText(exerciseId): string {
    if (this.allExercisesDone()) {
      return 'Õige! Võid järgmist peatükki alustada!';
    } else if (this.resultMap[exerciseId].queryResult === QueryResult.OK) {
      return 'Õige! Võid järgmise ülesande juurde minna!';
    } else {
      return 'Vale! Proovi uuesti!';
    }
  }

  allExercisesDone(): boolean {
    for (const key in this.resultMap) {
      if (this.resultMap[key] === undefined || this.resultMap[key].queryResult === QueryResult.FAIL) {
        return false;
      }
    }
    return true;
  }

  getIcon(id: number): string {
    return this.resultMap[id].queryResult === QueryResult.OK ? "fas fa-check result-icon-correct"
      : "result-icon-false fas fa-times";
  }

  toggleShowAnswer(id: number): void {
    this.showAnswerMap[id] = !this.showAnswerMap[id];
  }

  showAnswer(id: number): boolean {
    return this.showAnswerMap[id];
  }

  getShowAnswerText(id: number): string {
    return this.showAnswerMap[id] === false ? 'Kuva vastus' : 'Peida vastus';
  }

  showConsole(exercise: Exercise): boolean {
    return this.showLastResult(exercise.id) && (exercise.type === StatementType.SELECT
      || exercise.type === StatementType.ORDER);
  }

  getCardStyle(exerciseId: number) {
    return this.resultMap[exerciseId].queryResult === QueryResult.OK ? '#cdeecc' : '#fceedd';
  }
}
