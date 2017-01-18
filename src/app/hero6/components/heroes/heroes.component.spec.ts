/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Hero5Component } from './hero5.component';

describe('Hero5Component', () => {
  let component: Hero5Component;
  let fixture: ComponentFixture<Hero5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hero5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hero5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
