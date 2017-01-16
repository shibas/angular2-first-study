import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero4',
  templateUrl: './hero4.component.html',
  styleUrls: ['./hero4.component.css'],
  providers: [HeroService]
})

export class Hero4Component implements OnInit {
  title = 'Services';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  getHeroesSlowly(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
//    this.getHeroes();
    this.getHeroesSlowly();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
