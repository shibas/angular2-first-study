import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../hero';
import { Hero6Service } from '../../hero.service';
import { Hero6NavComponent } from '../hero-nav/hero-nav.component';

@Component({
  selector: 'app-hero6-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class Hero6HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  title = 'Routing - heroes';

  constructor(
    private router: Router,
    private heroService: Hero6Service
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
    this.router.navigate(['/hero7/detail', this.selectedHero.id]);
  }
}
