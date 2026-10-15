import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('Adactin Hotel login flows', () => {
  test('[ILABACCEL-1612] Verification of appropriate error message on failed login', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'test_key', description: 'ILABACCEL-1612' });
    const loginPage = new LoginPage(page);

    try {
      // Source step 1
      await loginPage.navigateToLoginPage();

      // Source step 2
      await loginPage.usernameInput.fill('InvalidUser99');
      await loginPage.passwordInput.fill('InvalidPass99');
      await expect(loginPage.usernameInput).toHaveValue('InvalidUser99');
      await expect(loginPage.passwordInput).toHaveValue('InvalidPass99');

      // Source step 3
      await loginPage.loginButton.click();

      // Source step 4
      await loginPage.expectLoginValidationError(/invalid login details|Invalid Login details/i);
      await expect(loginPage.passwordInput).toHaveValue('');
    } catch (error) {
      console.error('[ILABACCEL-1612] Test execution failed:', error);
      throw error;
    }
  });
});
