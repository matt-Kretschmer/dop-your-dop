import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderConfigModel } from '../models/shared.models';
import { ProfileComponent } from './profile/profile.component';
import { AlcoholicsComponent } from './alcoholics/alcoholics.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent implements OnInit {

  headerConfig!:HeaderConfigModel;
  action!: Function;
  
  tabConfig!: any[];

  ngOnInit(): void {
    this.tabConfig = [
      {
        name: 'Alcoholics',
        component: {
          type: AlcoholicsComponent,
          id: 'basic',
          context:{
            input: {
              data: 'ying yang we made it'
            },
            output: {
              headerConfigEmitter: (data:any) => this.something(data) 
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
            },
            output: {
              headerConfigEmitter: (data:any) => this.something(data) 
            }
          }
        },
      }
    ];
  }

  assignHeader(header:HeaderConfigModel){
    this.headerConfig = header;
  }


  something(input:HeaderConfigModel){
    // this.headerConfig = input
    console.log(input)
    // input.action()
    
  }

  actionHandler(action: Function){
    this.action = action;
    console.log("assigned")
  }
}
