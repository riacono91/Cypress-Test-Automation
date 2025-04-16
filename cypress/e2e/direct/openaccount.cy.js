describe('Parabank - Open New Account', () => {
    beforeEach(() => {
        cy.login();
        cy.visit('https://parabank.parasoft.com/parabank/openaccount.htm'); 
    });

    it('should open a new savings account', () => {
        cy.contains('Open New Account').should('be.visible');

        // Select the account type
        cy.get('select#type').select('SAVINGS'); 

        cy.get('#fromAccountId').then(($dropdown) => {
          cy.log($dropdown.html()); // Log the HTML content of the dropdown
        });

        cy.get('#fromAccountId').find('option').each(($option, index) => {
            cy.log(`Option ${index}: ${$option.text()}`);
        });

        // Ensure the dropdown has options and select the initial deposit account
        cy.get('#fromAccountId')
          .find('option')
          .should('have.length.greaterThan', 0) // Ensure there are at least 2 options
          .then(($options) => {
            const firstAccount = $options.eq(0).val(); // Get the value of the second option
            cy.get('#fromAccountId').select(firstAccount); // Select the account
          });

        

        // Submit the form
        cy.get('form > div > .button').click();

        // Verify that the account was opened successfully
        cy.contains('Account Opened!').should('be.visible'); 
        cy.get('#newAccountId').should('exist').and('not.be.empty');
    });
});