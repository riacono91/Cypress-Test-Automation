const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Aggiungi il plugin di pre-elaborazione Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Configura l'elaborazione dei file con esbuild
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature', // Percorso dei file .feature
    supportFile: 'cypress/support/e2e.js',   // File di supporto opzionale
  },
});
