import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderConfigModel } from 'src/app/models/shared.models';

@Component({
  selector: 'app-alcoholics',
  templateUrl: './alcoholics.component.html',
  styleUrls: ['./alcoholics.component.scss']
})
export class AlcoholicsComponent {
  @Input() data: any;
  @Output() headerConfigEmitter = new EventEmitter<any>();
  action = () => {
    console.log('alcoholics action button clicked')
  }

  headerConfig:HeaderConfigModel = {headerText: "Feeling Thirsty ?", buttonContent: "Have Another !", action:this.action}

  ngOnInit(): void {
    console.log(this.data)
    console.log("we render neh")
    this.headerConfigEmitter.emit(this.headerConfig)
  }
}
