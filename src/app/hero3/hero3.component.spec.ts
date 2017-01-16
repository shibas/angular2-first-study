/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Hero3Component } from './hero3.component';

describe('Hero3Component', () => {
  let component: Hero3Component;
  let fixture: ComponentFixture<Hero3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hero3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hero3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
