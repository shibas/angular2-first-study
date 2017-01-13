/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Hero1Component } from './hero1.component';

describe('Hero1Component', () => {
  let component: Hero1Component;
  let fixture: ComponentFixture<Hero1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hero1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hero1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
