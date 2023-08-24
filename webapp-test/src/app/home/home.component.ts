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
        },
      },
      {
        name: 'Profile',
        component: {
          type: ProfileComponent,
          id: 'surveyGroup',
        },
      }
    ];
  }

  assignHeader(header:HeaderConfigModel){
    this.headerConfig = header;
  }


  something(){
    this.action.call;
  }

  actionHandler(action: Function){
    this.action = action;
    console.log("assigned")
  }
}
