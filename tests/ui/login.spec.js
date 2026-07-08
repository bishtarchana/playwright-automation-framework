const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { users } = require('../../utils/testData');

test.describe('Login flow', () => {
  test('should log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginWithCredentials(users.validUser.username, users.validUser.password);
    await expect(page).toHaveURL(/.*inventory\.html/);
  });

  test('should show an error for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginWithCredentials(users.invalidUser.username, users.invalidUser.password);
    await expect(loginPage.errorMessage).toBeVisible();
  });
});