import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-tab-generator',
  templateUrl: './tab-generator.component.html',
  styleUrls: ['./tab-generator.component.scss']
})
export class TabGeneratorComponent {
  @ViewChild('myStepper') stepper!: MatStepper;
  @Input() stepperConfig!: any[];

  @Output() tabChanged = new EventEmitter();

  cheese(inp:MatTabChangeEvent){
    this.tabChanged.emit(inp.index)
  }
}
