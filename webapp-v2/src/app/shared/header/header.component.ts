import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderConfigModel } from 'src/app/models/shared.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() headerConfig!: HeaderConfigModel;
  @Output() actionButtonClicked = new EventEmitter<any>()

}
