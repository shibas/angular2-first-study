import { Hero } from '../../hero';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Hero6NavComponent } from '../hero-nav/hero-nav.component';

import { Hero6Service } from '../../hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'app-hero6-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class Hero6DetailComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(
    private heroService: Hero6Service,
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