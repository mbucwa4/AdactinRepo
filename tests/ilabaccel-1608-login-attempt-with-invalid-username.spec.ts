import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('Adactin Hotel login flows', () => {
  test('[ILABACCEL-1608] Login attempt with invalid username', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'test_key', description: 'ILABACCEL-1608' });
    const loginPage = new LoginPage(page);

    try {
      // Source step 1
      await loginPage.navigateToLoginPage();

      // Source step 2
      await loginPage.usernameInput.fill('InvalidUser99');
      await expect(loginPage.usernameInput).toHaveValue('InvalidUser99');

      // Source step 3
      await loginPage.passwordInput.fill('IA4073');
      await expect(loginPage.passwordInput).toHaveValue('IA4073');

      // Source step 4
      await loginPage.loginButton.click();
      await loginPage.expectLoginValidationError(/invalid login details|Invalid Login details/i);
      await expect(page).toHaveURL(/adactinhotelapp\.com\/?$/);
    } catch (error) {
      console.error('[ILABACCEL-1608] Test execution failed:', error);
      throw error;
    }
  });
});
