import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero5.component.html',
  styleUrls: ['./hero5.component.css'],
})

export class HeroesComponent implements OnInit {
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
      this.getHeroes();
  //    this.getHeroesSlowly();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
