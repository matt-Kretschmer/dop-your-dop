import { Component, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-alcoholics',
  templateUrl: './alcoholics.component.html',
  styleUrls: ['./alcoholics.component.scss']
})
export class AlcoholicsComponent {
  @Input() chart!: Chart;
}
