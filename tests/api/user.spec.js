const { test, expect } = require('@playwright/test');
const UsersAPI = require('../../utils/api/UsersAPI');
const { posts } = require('../../utils/testData');

test.describe('Users API', () => {
  test('should fetch a user by id', async () => {
    const usersApi = new UsersAPI();
    const response = await usersApi.getUser(1);
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.id).toBe(1);
  });

  test('should create a new user', async () => {
    const usersApi = new UsersAPI();
    const response = await usersApi.createUser(posts.createPostPayload);
    expect(response.status()).toBe(201);
    const data = await response.json();
    expect(data.title).toBe(posts.createPostPayload.title);
    expect(data.body).toBe(posts.createPostPayload.body);
    expect(data.userId).toBe(posts.createPostPayload.userId);
  });
});