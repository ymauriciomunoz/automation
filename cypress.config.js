const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  reporter:'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:'http://www.automationpractice.pl/index.php',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    video: true, 
    videosFolder: 'cypress/videos', 
    screenshotOnRunFailure: false, 
  },
});
