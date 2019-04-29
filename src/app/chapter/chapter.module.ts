import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChapterComponent} from './chapter.component';
import {ChapterRoutingModule} from './chapter-routing.module';
import {HighlightModule} from "ngx-highlightjs";
import {ExerciseComponent} from './exercise/exercise.component';
import {MatButtonModule, MatExpansionModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import {ExerciseRepository} from "./exercise/repository/exercise-repository";
import {HttpClientModule} from "@angular/common/http";
import {ResultTableComponent} from "./resultTable/result-table.component";

@NgModule({
  declarations: [
    ChapterComponent,
    ExerciseComponent,
    ResultTableComponent],
  imports: [
    CommonModule,
    ChapterRoutingModule,
    HighlightModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [
    ExerciseRepository,
  ]
})
export class ChapterModule { }
