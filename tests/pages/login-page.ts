import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly usernameError: Locator;
  readonly passwordError: Locator;
  readonly authError: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.usernameError = page.locator('#username_span');
    this.passwordError = page.locator('#password_span');
    this.authError = page.locator('.auth_error');
  }

  async navigateToLoginPage(): Promise<void> {
    await this.safeAction(async () => {
      await this.open('/');
      await this.expectVisible(this.usernameInput, 'Login page username field should be visible');
      await this.expectVisible(this.passwordInput, 'Login page password field should be visible');
      await this.expectVisible(this.loginButton, 'Login button should be visible');
    }, 'Open Adactin Hotel login page');
  }

  async signIn(username: string, password: string): Promise<void> {
    await this.safeAction(async () => {
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }, `Sign in with username ${username}`);
  }

  async expectSuccessfulNavigation(): Promise<void> {
    await this.safeAction(async () => {
      await this.expectUrl(/SearchHotel\.php/, 'Successful login should navigate to Search Hotel page');
      await expect(this.page.locator('body')).toContainText(/Search Hotel|Location|Hotels/);
    }, 'Validate successful login result');
  }

  async expectLoginValidationError(message: string | RegExp): Promise<void> {
    await this.safeAction(async () => {
      await this.expectVisible(this.authError, 'Authentication error should be visible');
      await expect(this.authError).toContainText(message, { timeout: 15000 });
    }, 'Validate invalid login error message');
  }
}
