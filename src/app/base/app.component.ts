import {Component, OnInit, ViewChild} from '@angular/core';
import {NgProgressComponent} from "@ngx-progressbar/core";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(NgProgressComponent) progressBar: NgProgressComponent;

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('andmebaas.dev');
  }

}
