import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './top/top.component';
import { Hero1Component } from './hero1/hero1.component';
import { Hero2Component } from './hero2/hero2.component';
import { Hero3Component } from './hero3/hero3.component';
import { Hero4Component } from './hero4/hero4.component';
import { Hero5DashboardComponent } from './hero5/components/dashboard/dashboard.component';
import { Hero5HeroesComponent } from './hero5/components/heroes/heroes.component';
import { Hero5DetailComponent } from './hero5/components/hero-detail/hero-detail.component';
import { Hero6DashboardComponent } from './hero6/components/dashboard/dashboard.component';
import { Hero6HeroesComponent } from './hero6/components/heroes/heroes.component';
import { Hero6DetailComponent } from './hero6/components/hero-detail/hero-detail.component';


const routes: Routes = [
  {
    path: '',
    component: TopComponent
  },
  {
    path: 'hero1',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'hero2',
    component: Hero1Component
  },
  {
    path: 'hero3',
    component: Hero2Component
  },
  {
    path: 'hero4',
    component: Hero3Component
  },
  {
    path: 'hero5',
    component: Hero4Component
  },
  {
    path: 'hero6/detail/:id',
    component: Hero5DetailComponent
  },
  {
    path: 'hero6/heroes',
    component: Hero5HeroesComponent
  },
  {
    path: 'hero6/dashboard',
    component: Hero5DashboardComponent
  },
  {
    path: 'hero6',
    redirectTo: 'hero6/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'hero7/detail/:id',
    component: Hero6DetailComponent
  },
  {
    path: 'hero7/heroes',
    component: Hero6HeroesComponent
  },
  {
    path: 'hero7/dashboard',
    component: Hero6DashboardComponent
  },
  {
    path: 'hero7',
    redirectTo: 'hero7/dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
