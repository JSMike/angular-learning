import { browser, element, by } from 'protractor';

export class AngularLearningPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngl-root h1')).getText();
  }
}
