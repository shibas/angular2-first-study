import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { Hero6Service } from '../../hero.service';
import { Hero6NavComponent } from '../hero-nav/hero-nav.component';

@Component({
  moduleId: module.id,
  selector: 'app-hero6-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class Hero6DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: Hero6Service) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }

}
