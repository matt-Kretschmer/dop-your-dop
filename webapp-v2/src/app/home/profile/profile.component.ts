import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderConfigModel } from 'src/app/models/shared.models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() data:any
  @Output() headerConfigEmitter = new EventEmitter<any>();
  action = () => {
    console.log('alcoholics action button clicked')
  }

  headerConfig:HeaderConfigModel = {headerText: "Drinking History", buttonContent: "Generate Timeline", action:this.action};
  
  ngOnInit(): void {
    console.log(this.data)
    this.headerConfigEmitter.emit(this.headerConfig)
  }
}
