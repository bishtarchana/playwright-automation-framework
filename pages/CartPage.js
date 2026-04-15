class CartPage {
    constructor(page) {
        this.page = page;
        //selectors for cart page elements can be added here
        this.addToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
        this.cartLink = '.shopping_cart_link';
        this.cartItemName = '.inventory_item_name';
    }   
    async addItemToCart() {
        await this.page.click(this.addToCartButton);
    }       
    async openCart() {
        await this.page.click(this.cartLink);
    }   
    async isItemInCart() {
        return await this.page.locator(this.cartItemName).isVisible();
    }   
}
module.exports = {CartPage};