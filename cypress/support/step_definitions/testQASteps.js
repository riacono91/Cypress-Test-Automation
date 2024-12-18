const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the login page', () => {
  cy.visit('https://the-internet.herokuapp.com/login');
});

Then('the login button should be disabled', () => {
  cy.get('button[type="submit"]').should('be.disabled');
});

When('I enter {string} as username and {string} as password', (username, password) => {
  cy.get('#username').type(username);
  cy.get('#password').type(password);
});

When('I click the login button', () => {
  cy.get('button[type="submit"]').click();
});

Then('I should see an error message containing {string}', (message) => {
  cy.get('.flash.error').should('contain', message);
});

Then('I should be redirected to a URL containing {string}', (urlPart) => {
  cy.url().should('include', urlPart);
});

Then('I should see a heading containing {string}', (heading) => {
  cy.get('h2').should('contain', heading);
});
