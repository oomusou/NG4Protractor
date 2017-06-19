import { browser, by, element } from 'protractor';

export class NG4ProtractorPage {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('http://127.0.0.1:8000/');
  }

  getParagraphText() {
    return element(by.className('title m-b-md')).getText();
  }
}
