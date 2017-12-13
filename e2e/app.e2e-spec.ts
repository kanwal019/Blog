import { AngularUnoPage } from './app.po';

describe('angular-uno App', function() {
  let page: AngularUnoPage;

  beforeEach(() => {
    page = new AngularUnoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
