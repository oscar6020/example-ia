import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
  }

  async isVisible() {
    return await this.title.isVisible();
  }

  async titleText() {
    return await this.title.textContent();
  }
}
