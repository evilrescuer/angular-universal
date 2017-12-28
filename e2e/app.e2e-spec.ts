import { TestAngular2UniversalPage } from './app.po';

describe('test-angular2-universal App', function() {
  let page: TestAngular2UniversalPage;

  beforeEach(() => {
    page = new TestAngular2UniversalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
