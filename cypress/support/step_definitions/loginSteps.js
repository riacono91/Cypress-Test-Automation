// support/step_definitions/loginSteps.js
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given("the user is on the login page at {string}", (url) => {
  cy.visit(url);
});

When("the user enters valid email and password", () => {
  cy.get('#username').type("user@example.com"); // Replace with actual selector
  cy.get('#password').type("securePassword123"); // Replace with actual selector
});

When('clicks the {string} button', (buttonText) => {
  cy.contains('button', buttonText).click();
});

Then("the user should be redirected to the dashboard or {string} page", (page) => {
  cy.url().should('include', '/dashboard'); // Check if redirected URL is correct
  cy.contains(page).should('be.visible'); // Verify "Home" or dashboard page content
});