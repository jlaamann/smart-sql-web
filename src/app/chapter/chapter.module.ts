import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChapterComponent} from './chapter.component';
import {ChapterRoutingModule} from './chapter-routing.module';
import {HighlightModule} from "ngx-highlightjs";

@NgModule({
  declarations: [ChapterComponent],
  imports: [
    CommonModule,
    ChapterRoutingModule,
    HighlightModule
  ]
})
export class ChapterModule { }
