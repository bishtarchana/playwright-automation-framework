const { test, expect } = require('@playwright/test');
const ProductsAPI = require('../../utils/api/ProductsAPI');

test.describe('Products API', () => {
  test('should list products', async () => {
    const productsApi = new ProductsAPI();
    const response = await productsApi.listProducts();
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(Array.isArray(data)).toBeTruthy();
    await productsApi.dispose();
  });

  test('should fetch a product by id', async () => {
    const productsApi = new ProductsAPI();
    const response = await productsApi.getProduct(1);
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.id).toBe(1);
    await productsApi.dispose();
  });
});
