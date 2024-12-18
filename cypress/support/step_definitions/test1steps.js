const { Given, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I visit the page {string}', (url) => {
  cy.visit(url);
});

Then('I should see the title {string}', (title) => {
  cy.title().should('eq', title);
});
