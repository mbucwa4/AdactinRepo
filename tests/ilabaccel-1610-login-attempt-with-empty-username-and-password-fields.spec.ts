import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('Adactin Hotel login flows', () => {
  test('[ILABACCEL-1610] Login attempt with empty username and password fields', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'test_key', description: 'ILABACCEL-1610' });
    const loginPage = new LoginPage(page);

    try {
      // Source step 1
      await loginPage.navigateToLoginPage();

      // Source step 2
      await loginPage.usernameInput.fill('');
      await loginPage.passwordInput.fill('');
      await expect(loginPage.usernameInput).toHaveValue('');
      await expect(loginPage.passwordInput).toHaveValue('');

      // Source step 3
      await loginPage.loginButton.click();
      await expect(loginPage.usernameError).toContainText(/Enter Username/i);
      await expect(page).toHaveURL(/adactinhotelapp\.com\/?$/);
    } catch (error) {
      console.error('[ILABACCEL-1610] Test execution failed:', error);
      throw error;
    }
  });
});
