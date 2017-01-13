import { Component, OnInit } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'hero1',
  templateUrl: './hero1.component.html',
  styleUrls: ['./hero1.component.css']
})
export class Hero1Component {
  title = 'The Heroe Editor';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
