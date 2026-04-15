const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');
const {users} = require('../utils/testData');

const createLoginPage = (page) => {
    const {LoginPage} = require('../pages/LoginPage');
    return new LoginPage(page);
}

test('Valid login test', async ({page}) => {
    const loginPage = createLoginPage(page);
    await loginPage.loginWithCredentials(users.validUser.username, users.validUser.password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Invalid login test', async ({page}) => {
    const loginPage = createLoginPage(page);
    await loginPage.loginWithCredentials(users.invalidUser.username, users.invalidUser.password);
    await expect(page.locator('.error-message-container')).toBeVisible();
});