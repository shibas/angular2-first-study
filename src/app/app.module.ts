import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing }   from './app.routing';

import { AppComponent } from './app.component';
import { Hero1Component } from './hero1/hero1.component';
import { TopComponent } from './top/top.component';
import { Hero2Component } from './hero2/hero2.component';
import { Hero3Component } from './hero3/hero3.component';
import { HeroDetailComponent } from './hero3/components/hero-detail/hero-detail.component';
import { Hero4Component } from './hero4/hero4.component';

@NgModule({
  declarations: [
    AppComponent,
    Hero1Component,
    TopComponent,
    Hero2Component,
    Hero3Component,
    HeroDetailComponent,
    Hero4Component
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
