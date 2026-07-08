const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

module.exports = {
  baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
  apiBaseURL: process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com',
  authToken: process.env.AUTH_TOKEN || null,
};
