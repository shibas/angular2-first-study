/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Hero5NavComponent } from './hero-nav.component';

describe('Hero5NavComponent', () => {
  let component: Hero5NavComponent;
  let fixture: ComponentFixture<Hero5NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hero5NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hero5NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
