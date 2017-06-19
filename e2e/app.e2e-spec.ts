import { NG4ProtractorPage } from './app.po';

describe('ng4-protractor App', () => {
  let page: NG4ProtractorPage;

  beforeEach(() => {
    page = new NG4ProtractorPage();
  });

  it('should display Laravel', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Laravel');
  });
});
