import { NG4ProtractorPage } from './app.po';

describe('ng4-protractor App', () => {
  let page: NG4ProtractorPage;

  beforeEach(() => {
    page = new NG4ProtractorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
