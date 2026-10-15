import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('Adactin Hotel login flows', () => {
  test('[ILABACCEL-1607] Successful login with valid username and password', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'test_key', description: 'ILABACCEL-1607' });
    const loginPage = new LoginPage(page);

    try {
      // Source step 1
      await loginPage.navigateToLoginPage();

      // Source step 2
      await loginPage.usernameInput.fill('AutotestB');
      await expect(loginPage.usernameInput).toHaveValue('AutotestB');

      // Source step 3
      await loginPage.passwordInput.fill('IA4073');
      await expect(loginPage.passwordInput).toHaveValue('IA4073');

      // Source step 4
      await loginPage.loginButton.click();
      await loginPage.expectSuccessfulNavigation();
      await expect(page.getByRole('link', { name: 'Search Hotel' })).toBeVisible();
      await expect(page.getByRole('cell', { name: 'Search Hotel (Fields marked with Red asterix (*) are mandatory)', exact: true })).toBeVisible();
    } catch (error) {
      console.error('[ILABACCEL-1607] Test execution failed:', error);
      throw error;
    }
  });
});
