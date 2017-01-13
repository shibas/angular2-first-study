import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';
import { Hero1Component } from './hero1/hero1.component';

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
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
