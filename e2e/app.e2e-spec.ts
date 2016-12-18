import { OmarMarvelPage } from './app.po';

describe('omar-marvel App', function() {
  let page: OmarMarvelPage;

  beforeEach(() => {
    page = new OmarMarvelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
