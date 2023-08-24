import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicLoaderDirective } from './dynamic-loader.directive';

@NgModule({
  declarations: [
    DynamicLoaderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynamicLoaderDirective
  ]
})
export class DirectiveModule { }