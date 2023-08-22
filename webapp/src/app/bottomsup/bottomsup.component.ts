import { Component } from '@angular/core';


@Component({
  selector: 'app-bottomsup',
  templateUrl: './bottomsup.component.html',
  styleUrls: ['./bottomsup.component.scss']
})
export class BottomsupComponent {
  public showPopup: boolean = true;

  constructor() { }
  ngOnInit() {
    this.showPopup = true;
    
  }
  ClosePopUp()  {
    console.log(this.showPopup)
    this.showPopup = false;
  }

  onClick() {
    this.ClosePopUp();
  }
  
}
