import { Component } from '@angular/core';

@Component({
  selector: 'app-hero5',
  template: `
    <h1>{{title}}</h1>
    <app-heroes></app-heroes>
  `
})

export class Hero5Component {
  title = 'Services';
}
