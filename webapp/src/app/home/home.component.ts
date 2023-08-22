import { Component, OnInit } from '@angular/core';
import { HeaderConfigModel } from '../models/shared.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  headerConfig:HeaderConfigModel = {headerText: "Feeling Thirsty ?", buttonContent: "Have Another !"}
}
