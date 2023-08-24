import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderConfigModel } from 'src/app/models/shared.models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Output() headerConfigEmitter = new EventEmitter<any>();
  headerConfig!:HeaderConfigModel;
  action = () => {
    console.log('profile button clicked')
  }
  ngOnInit(): void {
    // this.headerConfig= {action: this.action, }
    this.headerConfigEmitter.emit(this.action)
  }
}
