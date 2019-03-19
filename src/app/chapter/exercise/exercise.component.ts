import {Component, Input, OnChanges} from '@angular/core';
import {ExerciseService} from "./service/exercise-service";
import {ExerciseResult} from "./model/exercise-result";
import {QueryResult} from "./model/query-result";
import {Exercise} from "./model/exercise";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnChanges {

  @Input() chapterId: number;
  exercises: Exercise[] = [];
  resultMap: { [key: number]: ExerciseResult} = {};

  constructor(private exerciseService: ExerciseService) {
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
    console.log(query);
    this.exerciseService.validateSql(exerciseId, query).then(res => this.resultMap[exerciseId] = res);
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
}
