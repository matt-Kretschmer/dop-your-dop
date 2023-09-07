import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { TabGeneratorComponent } from './tab-generator/tab-generator.component';
import { MatStepperModule } from '@angular/material/stepper';
import { DynamicLoaderComponent } from './dynamic-loader/dynamic-loader.component'
import { DynamicLoaderDirective } from '../directive/dynamic-loader.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    HeaderComponent,
    AuthFormComponent,
    TabGeneratorComponent,
    DynamicLoaderComponent,
    DynamicLoaderDirective,
  ],
  exports: [
    HeaderComponent,
    TabGeneratorComponent,
    DynamicLoaderComponent,
    DynamicLoaderDirective,
    AuthFormComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ]
})
export class SharedModule { }
