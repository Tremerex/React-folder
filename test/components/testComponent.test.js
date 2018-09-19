/*global browser*/

import Main from './main';

import { DELAY } from './common';

export class TestComponent extends Main {

  constructor() {
    super('/');
    browser.pause(DELAY.MEDIUM);
  }

  get selector() {
    return browser.element('[data-qa=testComponent] div:nth-child(1)');
  }

  get countSelector() {
    return browser.element('[data-qa=testComponent] div:nth-child(2)');
  }

  clickCount() {
    const selector = this.selector;
    const countSelector = this.countSelector;
    selector.click();
  }

}
