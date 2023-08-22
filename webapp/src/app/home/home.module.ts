import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  providers: [],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    SharedModule,
  ]
})
export class HomeModule { }
