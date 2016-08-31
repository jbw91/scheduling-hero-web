import { SchedulingHeroWebPage } from './app.po';

describe('scheduling-hero-web App', function() {
  let page: SchedulingHeroWebPage;

  beforeEach(() => {
    page = new SchedulingHeroWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
