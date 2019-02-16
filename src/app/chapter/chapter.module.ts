import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChapterComponent} from './chapter.component';
import {ChapterRoutingModule} from './chapter-routing.module';

@NgModule({
  declarations: [ChapterComponent],
  imports: [
    CommonModule,
    ChapterRoutingModule
  ]
})
export class ChapterModule { }
