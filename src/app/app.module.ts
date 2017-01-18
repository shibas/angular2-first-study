import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule  } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { Hero1Component } from './hero1/hero1.component';
import { Hero2Component } from './hero2/hero2.component';
import { Hero3Component } from './hero3/hero3.component';
import { Hero3DetailComponent } from './hero3/components/hero-detail/hero-detail.component';
import { Hero4Component } from './hero4/hero4.component';
import { Hero5DetailComponent } from './hero5/components/hero-detail/hero-detail.component';
import { Hero5DashboardComponent } from './hero5/components/dashboard/dashboard.component';
import { Hero5HeroesComponent } from './hero5/components/heroes/heroes.component';
import { Hero5NavComponent } from './hero5/components/hero-nav/hero-nav.component';
import { Hero5Service } from './hero5/hero.service';
import { Hero6DetailComponent } from './hero6/components/hero-detail/hero-detail.component';
import { Hero6DashboardComponent } from './hero6/components/dashboard/dashboard.component';
import { Hero6HeroesComponent } from './hero6/components/heroes/heroes.component';
import { Hero6NavComponent } from './hero6/components/hero-nav/hero-nav.component';
import { Hero6Service } from './hero6/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    Hero1Component,
    Hero2Component,
    Hero3Component,
    Hero3DetailComponent,
    Hero4Component,
    Hero5DetailComponent,
    Hero5DashboardComponent,
    Hero5HeroesComponent,
    Hero5NavComponent,
    Hero6DetailComponent,
    Hero6DashboardComponent,
    Hero6HeroesComponent,
    Hero6NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [Hero5Service, Hero6Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
