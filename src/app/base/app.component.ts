import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {NgProgressComponent} from "@ngx-progressbar/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(NgProgressComponent) progressBar: NgProgressComponent;

  constructor() {
  }

  ngAfterViewInit(): void {
    // this.progressBar.start();
  }
}
