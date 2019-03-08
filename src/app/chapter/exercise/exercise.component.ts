import {Component, Input, OnInit} from '@angular/core';
import {ExerciseService} from "./service/exercise-service";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  @Input() chapterId: number;

  constructor(private exerciseService: ExerciseService) {
  }

  ngOnInit() {
  }

  runSQL(query) {
    console.log(query);
    this.exerciseService.validateSql(query);
  }
}
