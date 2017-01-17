import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { Hero1Component } from './hero1/hero1.component';
import { Hero2Component } from './hero2/hero2.component';
import { Hero3Component } from './hero3/hero3.component';
import { Hero3DetailComponent } from './hero3/components/hero-detail/hero-detail.component';
import { Hero4Component } from './hero4/hero4.component';
import { Hero5Component } from './hero5/hero5.component';
import { Hero5DetailComponent } from './hero5/components/hero-detail/hero-detail.component';
import { Hero5DashboardComponent } from './hero5/components/dashboard/dashboard.component';
import { Hero5HeroesComponent } from './hero5/components/heroes/heroes.component';
import { Hero5Service } from './hero5/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    Hero1Component,
    Hero2Component,
    Hero3Component,
    Hero4Component,
    Hero5Component,
    Hero3DetailComponent,
    Hero5DetailComponent,
    Hero5DashboardComponent,
    Hero5HeroesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [Hero5Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
