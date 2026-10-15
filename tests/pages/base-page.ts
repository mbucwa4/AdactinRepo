import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async safeAction<T>(action: () => Promise<T>, context: string): Promise<T> {
    try {
      return await action();
    } catch (error) {
      throw new Error(`${context} failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  async open(path = '/'): Promise<void> {
    await this.safeAction(async () => {
      await this.page.goto(path);
    }, `Navigate to ${path}`);
  }

  protected async expectVisible(locator: Locator, description: string): Promise<void> {
    await this.safeAction(async () => {
      await expect(locator).toBeVisible({ timeout: 15000 });
    }, description);
  }

  protected async expectText(locator: Locator, expected: string | RegExp, description: string): Promise<void> {
    await this.safeAction(async () => {
      await expect(locator).toContainText(expected, { timeout: 15000 });
    }, description);
  }

  protected async expectUrl(urlPattern: RegExp | string, description: string): Promise<void> {
    await this.safeAction(async () => {
      await expect(this.page).toHaveURL(urlPattern, { timeout: 15000 });
    }, description);
  }
}
