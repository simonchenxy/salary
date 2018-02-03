import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ViewDetailComponent } from './view-detail.component';

import { AppRoutingComponent } from './app-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
