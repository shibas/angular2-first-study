import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }   from './app.routing';

import { AppComponent } from './app.component';
import { Hero1Component } from './hero1/hero1.component';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    Hero1Component,
    TopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
