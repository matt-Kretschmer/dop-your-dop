import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, Input, OnChanges, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { DynamicLoaderDirective } from 'src/app/directive/dynamic-loader.directive';

@Component({
  selector: 'app-dynamic-loader',
  templateUrl: './dynamic-loader.component.html',
  styleUrls: ['./dynamic-loader.component.scss']
})
export class DynamicLoaderComponent implements AfterViewInit {
  
  @Input() displayComponent: any;

  @ViewChildren(DynamicLoaderDirective) dynamicLoader!: QueryList<DynamicLoaderDirective>;

  viewContainerRef!: ViewContainerRef;
  componentRef: any;
  constructor(
    private cdRef: ChangeDetectorRef
  ) { }


  ngAfterViewInit() {
    this.dynamicLoader.forEach((loader) => {
      this.loadComponent(this.displayComponent, loader);
      this.cdRef.detectChanges();
    });
  }

  ngOnChanges(changes: any) {
    if(changes['displayComponent'].previousValue && changes['displayComponent'].currentValue.type) {
      this.viewContainerRef.clear();
      this.dynamicLoader.forEach((loader) => {
        this.loadComponent(this.displayComponent, loader);
        this.cdRef.detectChanges();
      });
    }
  }

  loadComponent(displayComponent: any, loader: DynamicLoaderDirective): void {
    this.viewContainerRef = loader.viewContainerRef;
    this.viewContainerRef.clear();
    this.componentRef = this.viewContainerRef.createComponent(displayComponent.type); //renders the component based on directive 
    this.setInputs(this.componentRef, displayComponent.context)
  }

  setInputs(componentRef: any, context: any) {
    if(context){
      if(context.input){
        Object.keys(context.input).forEach((key) => {
          componentRef.instance[key] = context.input[key]
        });
      }

      if(context.output){
        Object.keys(context.output).forEach((key) => {
          componentRef.instance[key].subscribe((testEvent: any) => { context.output[key](testEvent) });
        });
      }
    }
  }

}
