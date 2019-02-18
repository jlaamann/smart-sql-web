import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit, AfterViewInit {

  id: number;
  @ViewChild('dataContainer') dataContainer: ElementRef;

  constructor(private route: ActivatedRoute,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get('assets/chapters/chapter1.html', {responseType: 'text'}).subscribe(data => {
      this.loadData(data);
    });
  }

  loadData(data) {
    this.dataContainer.nativeElement.innerHTML = data;
  }

  ngAfterViewInit(): void {
    console.log(this.id);
  }

}
