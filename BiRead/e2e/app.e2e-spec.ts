import { BiReadPage } from './app.po';

describe('bi-read App', () => {
  let page: BiReadPage;

  beforeEach(() => {
    page = new BiReadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
