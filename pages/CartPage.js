class CartPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartItemName = page.locator('.inventory_item_name');
  }

  async addItemToCart() {
    await this.addToCartButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async isItemInCart() {
    return this.cartItemName.first().isVisible();
  }
}

module.exports = { CartPage };
