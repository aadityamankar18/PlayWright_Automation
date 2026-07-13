// @ts-check
const { defineConfig } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  expect: {
    timeout: 50 * 1000,
  },

  reporter: [
    ['html'],
    ['junit', { outputFile: 'test-results/results.xml' }]
  ],

  use: {
    browserName: 'chromium',

    // Run headless in Jenkins
    headless: false,
    screenshot : 'on',
    trace : 'on',
  },
});