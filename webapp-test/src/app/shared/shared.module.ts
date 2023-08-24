import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { TabGeneratorComponent } from './tab-generator/tab-generator.component';
import { MatStepperModule } from '@angular/material/stepper';
import { DynamicLoaderComponent } from './dynamic-loader/dynamic-loader.component'
import { DirectiveModule } from '../directive/directive.module';

@NgModule({
  declarations: [
    HeaderComponent,
    AuthFormComponent,
    TabGeneratorComponent,
    DynamicLoaderComponent,
  ],
  exports: [
    HeaderComponent,
    TabGeneratorComponent,
    
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatStepperModule,
    DirectiveModule
  ]
})
export class SharedModule { }
