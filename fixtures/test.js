const base = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');
const { users } = require('../utils/testData');

const test = base.test.extend({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(users.validUser.username, users.validUser.password);
        await use(loginPage);
    }
}); 
module.exports = {test, expect: base.expect};