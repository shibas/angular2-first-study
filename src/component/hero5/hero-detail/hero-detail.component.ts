import { Hero } from '../hero';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Hero5NavComponent } from '../hero-nav/hero-nav.component';

import { Hero5Service } from '../hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: 'module.id',
  selector: 'app-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class Hero5DetailComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(
    private heroService: Hero5Service,
    private route: ActivatedRoute,
    private location: Location 
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
