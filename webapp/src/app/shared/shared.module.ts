import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent
  ],
  providers: [],
})
export class SharedModule { }
