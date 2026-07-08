const { test, expect } = require('@playwright/test');
const AuthAPI = require('../../utils/api/AuthAPI');

test.describe('Auth API', () => {
  test('should retrieve an auth token', async () => {
    const authApi = new AuthAPI();
    const token = await authApi.getToken();
    expect(token).toBeTruthy();
    await authApi.dispose();
  });
});