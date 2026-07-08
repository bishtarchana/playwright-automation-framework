const APIClient = require('../apiClient');

class ProductsAPI {
  constructor(token = null) {
    this.client = new APIClient({ token });
  }

  async listProducts() {
    return this.client.get('/posts');
  }

  async getProduct(productId) {
    return this.client.get(`/posts/${productId}`);
  }

  async createProduct(payload) {
    return this.client.post('/posts', payload);
  }

  async dispose() {
    await this.client.dispose();
  }
}

module.exports = ProductsAPI;
