import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';
import { Hero1Component } from './hero1/hero1.component';
import { Hero2Component } from './hero2/hero2.component';
import { Hero3Component } from './hero3/hero3.component';
import { Hero4Component } from './hero4/hero4.component';
import { Hero5Component } from './hero5/hero5.component';

const appRoutes: Routes = [
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
    path: 'hero6',
    component: Hero5Component
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
