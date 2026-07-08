const APIClient = require('../apiClient');
const { authToken } = require('../config');

class AuthAPI {
  constructor() {
    this.client = new APIClient();
  }

  async getToken() {
    if (authToken) {
      return authToken;
    }

    return 'demo-token';
  }

  async dispose() {
    await this.client.dispose();
  }
}

module.exports = AuthAPI;
