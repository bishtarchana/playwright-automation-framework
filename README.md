# Playwright Demo

This repository demonstrates Playwright test automation for UI and API scenarios.

## Project structure

- `tests/api/` - API test cases
- `tests/ui/` - UI test cases
- `pages/` - Page object classes for UI actions
- `fixtures/` - Playwright fixtures and shared test setup
- `utils/` - Shared utilities and configuration helpers

## Framework architecture

This repository is organized as a clean automation framework:

- UI tests and API tests are separated into their own `tests/` folders.
- `pages/` contains Page Objects that encapsulate UI page behavior.
- `fixtures/` contains shared Playwright fixtures and reusable setup.
- `utils/` contains configuration, shared clients, service wrappers, and test data.
- `utils/testData/` stores domain data for both UI and API tests.

## Folder and file purposes

- `playwright.config.js` - central Playwright configuration, browser projects, retries, reporters, and base URL.
- `utils/config.js` - loads environment values and exposes runtime configuration.
- `utils/apiClient.js` - generic API client wrapper for Playwright request contexts and headers.
- `utils/api/` - service layer for domain API operations like auth, users, and products.
- `pages/LoginPage.js` - login page interactions and locators.
- `pages/CartPage.js` - cart page actions and assertions.
- `fixtures/test.js` - custom fixture extension that provides reusable login setup.
- `utils/testData/users.js` - user credentials and login test data.
- `utils/testData/posts.js` - API payload test data.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the environment example:
   ```bash
   cp .env.example .env
   ```

3. Update `.env` values if needed.

## Run tests

- Run all tests:
  ```bash
  npm test
  ```

- Run UI tests only:
  ```bash
  npm run test:ui
  ```

- Run API tests only:
  ```bash
  npm run test:api
  ```

- Open the Playwright report:
  ```bash
  npm run test:report
  ```

## Lint & format

- Lint the repository:
  ```bash
  npm run lint
  ```

- Format code:
  ```bash
  npm run format
  ```

## CI

A GitHub Actions workflow is configured in `.github/workflows/playwright.yml` to install dependencies, install browsers, and run tests.

## How to contribute

- Keep new test cases small and focused.
- Add Page Objects for new UI flows under `pages/`.
- Add API service wrappers for new endpoints under `utils/api/`.
- Store reusable test data in `utils/testData/`.
- Use existing fixtures in `fixtures/test.js` where possible.
- Run `npm run lint` and `npm run format` before committing.

## Test strategy

- UI tests should validate user journeys through page objects.
- API tests should validate endpoint behavior through service wrappers.
- Keep assertions clear and avoid overly broad end-to-end scenarios.
- Store configuration in `.env` and avoid hard-coding URLs or secrets.
