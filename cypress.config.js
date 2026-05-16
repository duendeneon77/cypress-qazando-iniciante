const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'u2c1cn',
  allowCypressEnv: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true, //mostra graficos
    reportTitle: 'Projeto do curso de Cypress', //adiciona titulo
    reportPageTitle: 'Projeto do curso de Cypress', //adiciona o titulo do report

  },
  e2e: {
    baseUrl: "http://automationpratice.com.br",
    defaultCommandTimeout: 7000,
    setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
