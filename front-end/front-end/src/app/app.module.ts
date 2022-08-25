import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutes} from "./app.routes";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule , AppRoutes],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

