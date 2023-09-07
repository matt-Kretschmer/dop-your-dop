import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderConfigModel } from '../models/shared.models';
import { ProfileComponent } from './profile/profile.component';
import { AlcoholicsComponent } from './alcoholics/alcoholics.component';
import { Chart } from 'angular-highcharts';
import { DrinksService } from '../services/drinks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent implements OnInit {

  headerConfig!:HeaderConfigModel[];
  action!: Function;

  tabConfig!: any[];
  chart!:Chart;
  headerIndex:number = 0;

  constructor(
    private drinksService: DrinksService
  ){}

  ngOnInit(): void {
    this.drinksService.getDrinks().then((drinks) => {
      console.log(drinks)
    }).catch((error) => {
      console.log(error)
    })
    this.chart = new Chart({
      chart: {
        type: 'line',
        backgroundColor: '#212121'
      },
      title: {
        text: 'Chart Demo',
        style: {
          color: '#faefb3', // Change the title text color
        },
      },
      xAxis: {
        categories: [
          '12am', '1am', '2am', '3am', '4am', '5am', '6am',
          '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',
          '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',
          '9pm', '10pm', '11pm'
        ],
        title: {
          text: 'Time',
          style: {
            color: '#faefb3', // Change the x-axis title color
          },
        },
        labels: {
          style: {
            color: '#faefb3', // Change the x-axis labels color
          },
        },
      },
      
      yAxis: {
        min: 0,
        title: {
          text: 'Drank Drank',
          style: {
            color: '#faefb3', // Change the y-axis title color
          },
        },
        labels: {
          style: {
            color: '#faefb3', // Change the y-axis labels color
          },
        },
      },
      legend: {
        reversed: true,
        itemStyle: {
          color: '#faefb3', // Change the legend item text color
        },
      },
      plotOptions: {
        series: {
          stacking: 'normal',
          color: '#faefb3', // Change the line color
          marker: {
            fillColor: '#faefb3', // Change the marker fill color
            lineColor: '#faefb3', // Change the marker line color
          },
        },
      },
      series: [{
        name: 'Data Series',
        type:'line',
        data: this.generateRandomData(),
        color: '#faefb3', // Change the series line color
        marker: {
          fillColor: '#faefb3', // Change the series marker fill color
          lineColor: '#faefb3', // Change the series marker line color
        },// Call a function to generate random data
      }],
    });
    this.headerConfig = [
      {headerText: "Feeling Thirsty ?", buttonContent: "Have Another !", action:() => {}},
      {headerText: "Drinking History", buttonContent: "Generate Timeline", action:() => {}},
    ]
    this.tabConfig = [
      {
        name: 'Alcoholics',
        component: {
          type: AlcoholicsComponent,
          id: 'basic',
          context:{
            input: {
              chart: this.chart
            }
          }
        },
      },
      {
        name: 'Profile',
        component: {
          type: ProfileComponent,
          id: 'surveyGroup',
          context:{
            input: {
              data: 'easy sui'
            }
          }
        },
      }
    ];
  }

  generateRandomData() {
    const data = [];
    for (let i = 0; i < 24; i++) {
      data.push(Math.floor(Math.random() * 100)); // Random data values (adjust range as needed)
    }
    return data;
  }

  doIt(index:number){
    this.headerIndex = index
  }
}
