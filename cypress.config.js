const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "f9vpni"
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// npx cypress run --record --key 5061b932-cdb8-4aa0-a047-bd6f42c65335