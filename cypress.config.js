import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
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
