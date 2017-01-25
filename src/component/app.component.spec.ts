import { getTestBed, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import * as assert from 'power-assert';
import { spy } from 'sinon';

describe(`AppComponent`, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    assert(!!app);
  });

  it(`should have as title 'app works!'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    assert.equal(app.title, 'app works!');
  });
});

