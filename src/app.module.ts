import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import './rxjs-extensions';

import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './component/app.component';

import { TopComponent } from './component/top/top.component';

import { Hero1Component } from './component/hero1/hero1.component';

import { Hero2Component } from './component/hero2/hero2.component';

import { Hero3Component } from './component/hero3/hero3.component';
import { Hero3DetailComponent } from './component/hero3/hero-detail/hero-detail.component';

import { Hero4Component } from './component/hero4/hero4.component';

import { Hero5DetailComponent } from './component/hero5/hero-detail/hero-detail.component';
import { Hero5DashboardComponent } from './component/hero5/dashboard/dashboard.component';
import { Hero5HeroesComponent } from './component/hero5/heroes/heroes.component';
import { Hero5NavComponent } from './component/hero5/hero-nav/hero-nav.component';
import { Hero5Service } from './component/hero5/hero.service';

import { Hero6DetailComponent } from './component/hero6/hero-detail/hero-detail.component';
import { Hero6DashboardComponent } from './component/hero6/dashboard/dashboard.component';
import { Hero6HeroesComponent } from './component/hero6/heroes/heroes.component';
import { Hero6NavComponent } from './component/hero6/hero-nav/hero-nav.component';
import { Hero6SearchComponent } from './component/hero6/hero-search/hero-search.component';
import { Hero6Service } from './component/hero6/hero.service';

// for Simulating the web API
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './component/hero6/in-memory-data.service';

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
    Hero6SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [Hero5Service, Hero6Service],
  bootstrap: [AppComponent]
})

export class AppModule {
    constructor(appRef: ApplicationRef) {
        appRef.bootstrap(AppComponent);
    }
}
