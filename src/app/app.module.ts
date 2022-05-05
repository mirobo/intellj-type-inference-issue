import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ADummyComponent} from "./type-infer-with-function-references/a-dummy.component";

@NgModule({
  declarations: [
    AppComponent,
    ADummyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
