import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  @Input() chapterId: number;

  constructor() {
  }

  ngOnInit() {
  }

  runSQL(query) {
    console.log(query);
  }
}
