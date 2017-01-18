import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-nav',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/hero6/dashboard">Dashboard</a>
      <a routerLink="/hero6/heroes">Heroes</a>
    </nav>
    <app-dashboard></app-dashboard>
  `,
  styleUrls: ['./hero5.component.css'],
})

export class Hero5Component {
  title = 'Routing';
}
