import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './component/top/top.component';
import { Hero1Component } from './component/hero1/hero1.component';
import { Hero2Component } from './component/hero2/hero2.component';
import { Hero3Component } from './component/hero3/hero3.component';
import { Hero4Component } from './component/hero4/hero4.component';
import { Hero5DashboardComponent } from './component/hero5/dashboard/dashboard.component';
import { Hero5HeroesComponent } from './component/hero5/heroes/heroes.component';
import { Hero5DetailComponent } from './component/hero5/hero-detail/hero-detail.component';
import { Hero6DashboardComponent } from './component/hero6/dashboard/dashboard.component';
import { Hero6HeroesComponent } from './component/hero6/heroes/heroes.component';
import { Hero6DetailComponent } from './component/hero6/hero-detail/hero-detail.component';


const routes: Routes = [
  {
    path: 'public',
    redirectTo: '/',
    pathMatch: 'full'
  },
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
