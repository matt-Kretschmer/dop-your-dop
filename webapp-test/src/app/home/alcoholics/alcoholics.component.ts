import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alcoholics',
  templateUrl: './alcoholics.component.html',
  styleUrls: ['./alcoholics.component.scss']
})
export class AlcoholicsComponent {
  @Output() headerConfigEmitter = new EventEmitter<any>();
  action = () => {
    console.log('alcoholics action button clicked')
  }
  ngOnInit(): void {
    console.log("we render neh")
    this.headerConfigEmitter.emit(this.action)
  }
}
