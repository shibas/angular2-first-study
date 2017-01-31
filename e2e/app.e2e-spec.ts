import { TourOfHeroesPage } from './app.po';
import * as assert from 'power-assert';

describe('tour-of-heroes App', function() {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('TUTORIAL : TOUR OF HEROESが表示されること', () => {
    page.navigateTo();
    return page.getParagraphText().then( text => {
      assert.equal(text, 'TUTORIAL : TOUR OF HEROES');
    });
  });
});
