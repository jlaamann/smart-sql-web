import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChapterComponent} from './chapter.component';
import {ChapterRoutingModule} from './chapter-routing.module';
import {HighlightModule} from "ngx-highlightjs";
import { ExerciseComponent } from './exercise/exercise.component';
import {MatButtonModule, MatFormField, MatFormFieldModule, MatInputModule} from "@angular/material";
import {ExerciseRepository} from "./exercise/repository/exercise-repository";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [ChapterComponent, ExerciseComponent],
  imports: [
    CommonModule,
    ChapterRoutingModule,
    HighlightModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    ExerciseRepository,
  ]
})
export class ChapterModule { }
