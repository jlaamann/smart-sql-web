import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  MatButtonModule, MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './navigation/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {AppRoutingModule} from './app-routing.module';
import {ChapterModule} from '../chapter/chapter.module';
import { PanelComponent } from './panel/panel.component';
import {HttpClientModule} from "@angular/common/http";
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';

import sql from 'highlight.js/lib/languages/sql';

export function hljsLanguages() {
  return [
    {name: 'sql', func: sql},
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    ChapterModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: hljsLanguages,
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
