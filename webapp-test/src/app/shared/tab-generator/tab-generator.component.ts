import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-tab-generator',
  templateUrl: './tab-generator.component.html',
  styleUrls: ['./tab-generator.component.scss']
})
export class TabGeneratorComponent {
  @ViewChild('myStepper') stepper!: MatStepper;
  @Input() stepperConfig!: any[];
  @Output() endJourney: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelJourney: EventEmitter<any> = new EventEmitter<any>();

  selectedIndex!: number;

  ngOnInit(): void {
    this.selectedIndex = this.stepperConfig.findIndex(() => true);
    this.stepperConfig.map((config: any) => {
      return config;
    })
  }

  nextPage() {
    if(this.stepper.selected){
      this.stepper.selected.completed = true;
    }
  
    this.selectedIndex < this.stepperConfig.length-1 ? this.stepper.next() : this.closeStepper();
    this.selectedIndex = this.stepper.selectedIndex;
  }

  closeStepper(){
    this.endJourney.emit();
  }
  
  previousPage() {
    if(this.stepper.selected){
      this.stepper.selected.completed = false
    }
  
    this.selectedIndex-1 < 0 ? this.cancelJourney.emit() : this.stepper.previous();
    this.selectedIndex = this.stepper.selectedIndex
  }

  setActiveStep(index: number): void {
    this.selectedIndex = index;
    this.stepper.selectedIndex = index;
  }
}
