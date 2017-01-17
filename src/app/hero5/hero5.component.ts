import { Component } from '@angular/core';

@Component({
  selector: 'app-hero5',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/hero6/dashboard">Dashboard</a>
      <a routerLink="/hero6/heroes">Heroes</a>
    </nav>
    <my-hero-detail></my-hero-detail>
    <app-dashboard></app-dashboard>
    <app-heroes></app-heroes>
  `
})

export class Hero5Component {
  title = 'Services';
}
