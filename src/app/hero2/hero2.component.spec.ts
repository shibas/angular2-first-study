/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Hero2Component } from './hero2.component';

describe('Hero2Component', () => {
  let component: Hero2Component;
  let fixture: ComponentFixture<Hero2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hero2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hero2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
