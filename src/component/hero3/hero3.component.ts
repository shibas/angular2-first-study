import { Component, Input } from '@angular/core';
import { Hero } from './hero';
import { Hero3DetailComponent } from './hero-detail/hero-detail.component';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-hero3',
  templateUrl: './hero3.component.html',
  styleUrls: ['./hero3.component.css']
})

export class Hero3Component {
  title = 'Multiple Components';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
