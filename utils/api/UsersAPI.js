const APIClient = require('../apiClient');

class UsersAPI {
  constructor(token = null) {
    this.client = new APIClient({ token });
  }

  async getUser(userId) {
    return this.client.get(`/posts/${userId}`);
  }

  async createUser(payload) {
    return this.client.post('/posts', payload);
  }

  async updateUser(userId, payload) {
    return this.client.put(`/posts/${userId}`, payload);
  }

  async dispose() {
    await this.client.dispose();
  }
}

module.exports = UsersAPI;
