import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('Adactin Hotel login flows', () => {
  test('[ILABACCEL-1609] Login attempt with invalid password', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'test_key', description: 'ILABACCEL-1609' });
    const loginPage = new LoginPage(page);

    try {
      // Source step 1
      await loginPage.navigateToLoginPage();

      // Source step 2
      await loginPage.usernameInput.fill('AutotestB');
      await expect(loginPage.usernameInput).toHaveValue('AutotestB');

      // Source step 3
      await loginPage.passwordInput.fill('WrongPassword99');
      await expect(loginPage.passwordInput).toHaveValue('WrongPassword99');

      // Source step 4
      await loginPage.loginButton.click();
      await loginPage.expectLoginValidationError(/invalid login details|Invalid Login details/i);
      await expect(page).toHaveURL(/adactinhotelapp\.com\/?$/);
    } catch (error) {
      console.error('[ILABACCEL-1609] Test execution failed:', error);
      throw error;
    }
  });
});
