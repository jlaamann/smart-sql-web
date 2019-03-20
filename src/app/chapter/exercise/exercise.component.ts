import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ExerciseService} from "./service/exercise-service";
import {ExerciseResult} from "./model/exercise-result";
import {QueryResult} from "./model/query-result";
import {Exercise} from "./model/exercise";
import {NgProgress, NgProgressRef} from "@ngx-progressbar/core";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnChanges, OnInit {

  @Input() chapterId: number;
  exercises: Exercise[] = [];
  resultMap: { [key: number]: ExerciseResult} = {};
  progressRef: NgProgressRef;

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
        this.exercises.forEach(ex => this.resultMap[ex.id] = undefined);
      });
  }

  runSQL(exerciseId, query) {
    this.progressRef.start();
    this.resultMap[exerciseId] = undefined;
    this.exerciseService.validateSql(exerciseId, query)
      .then(res => {
        this.progressRef.complete();
        this.resultMap[exerciseId] = res;
      });
  }

  showLastResult(exerciseId): boolean {
    return this.resultMap[exerciseId] !== undefined;
  }

  getLastResultText(exerciseId): string {
    if (this.resultMap[exerciseId].queryResult === QueryResult.OK) {
      return 'Õige! Võid järgmise ülesande juurde minna!'; // todo: kuvada teine tekst, kui ylesanded otsas
    } else {
      return 'Vale! Proovi uuesti!';
    }
  }

  getIcon(id: number): string {
    return this.resultMap[id].queryResult === QueryResult.OK ? "fas fa-check result-icon-correct"
      : "result-icon-false fas fa-times";
  }
}
