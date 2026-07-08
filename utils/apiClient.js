const { request } = require('@playwright/test');
const { apiBaseURL } = require('./config');

class APIClient {
  constructor({ token = null, defaultHeaders = {} } = {}) {
    this.baseURL = apiBaseURL;
    this.token = token;
    this.defaultHeaders = defaultHeaders;
    this.context = null;
  }

  getAuthorizationHeader() {
    return this.token ? { Authorization: `Bearer ${this.token}` } : {};
  }

  getHeaders(headers = {}) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...this.defaultHeaders,
      ...this.getAuthorizationHeader(),
      ...headers,
    };
  }

  async getContext() {
    if (!this.context) {
      this.context = await request.newContext({
        baseURL: this.baseURL,
        extraHTTPHeaders: this.getHeaders(),
      });
    }
    return this.context;
  }

  async dispose() {
    if (this.context) {
      await this.context.dispose();
      this.context = null;
    }
  }

  async request(method, endpoint, data) {
    const context = await this.getContext();
    const options = {};
    if (data) options.data = data;
    return await context[method](this.baseURL + endpoint, options);
  }

  async get(endpoint) {
    return this.request('get', endpoint);
  }

  async post(endpoint, data) {
    return this.request('post', endpoint, data);
  }

  async put(endpoint, data) {
    return this.request('put', endpoint, data);
  }

  async patch(endpoint, data) {
    return this.request('patch', endpoint, data);
  }

  async delete(endpoint) {
    return this.request('delete', endpoint);
  }

  async getJson(endpoint) {
    const response = await this.get(endpoint);
    return response.json();
  }
}

module.exports = APIClient;