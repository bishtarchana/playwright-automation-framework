const{test, expect} = require('../../fixtures/test');
const {CartPage} = require('../../pages/CartPage');

test('Add item to cart test', async ({loginPage}) => {
    const cartPage = new CartPage(loginPage.page);
    await cartPage.addItemToCart();
    await cartPage.openCart();
    await expect(await cartPage.isItemInCart()).toBeTruthy();
});