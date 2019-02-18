import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit, AfterViewInit {

  id: number;
  @ViewChild('dataContainer') dataContainer: ElementRef;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.loadData('<p> demo text loading </p>');
  }

  loadData(data) {
    this.dataContainer.nativeElement.innerHTML = data;
  }

  ngAfterViewInit(): void {
    console.log(this.id);
  }

}
