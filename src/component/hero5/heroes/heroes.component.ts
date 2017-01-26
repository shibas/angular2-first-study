import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { Hero5Service } from '../hero.service';
import { Hero5NavComponent } from '../hero-nav/hero-nav.component';

@Component({
  moduleId: 'module.id',
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class Hero5HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  title = 'Routing - heroes';

  constructor(
    private router: Router,
    private heroService: Hero5Service
  ) { }

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

  gotoDetail(): void {
    this.router.navigate(['/hero6/detail', this.selectedHero.id]);
  }
}
