import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-result-table',
  styleUrls: ['./result-table.component.css'],
  template: `
    <mat-expansion-panel [expanded]="true" class="result-console">
      <mat-expansion-panel-header>
        <mat-panel-title>
          <span><i class="fas fa-terminal"></i> konsool</span>
        </mat-panel-title>
        <mat-panel-description>
          päringu tulemused
        </mat-panel-description>
      </mat-expansion-panel-header>

      <table class="result-console--table" style="width:100%">
        <tr>
          <th *ngFor="let column of columns" align="left">{{column}}</th>
        </tr>
        <tr *ngFor="let row of values">
          <td *ngFor="let columnVal of row" align="left">{{columnVal}}</td>
        </tr>
      </table>
    </mat-expansion-panel>`
})
export class ResultTableComponent {
  @Input() columns: string[] = [];
  @Input() values: string[][] = [];
}
