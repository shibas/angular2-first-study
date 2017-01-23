/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Hero6NavComponent } from './hero-nav.component';

describe('Hero6NavComponent', () => {
  let component: Hero6NavComponent;
  let fixture: ComponentFixture<Hero6NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hero6NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hero6NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
