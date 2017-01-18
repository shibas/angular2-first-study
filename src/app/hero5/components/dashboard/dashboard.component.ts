import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { Hero5Service } from '../../hero.service';
import { Hero5NavComponent } from '../hero-nav/hero-nav.component';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class Hero5DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: Hero5Service) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }

}
