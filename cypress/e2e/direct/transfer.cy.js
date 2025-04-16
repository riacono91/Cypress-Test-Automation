describe('Parabank - Transfer Funds with Validation', () => {
    beforeEach(() => {
        cy.login();
        cy.visit('https://parabank.parasoft.com/parabank/transfer.htm');
    });
    it('should display correct confirmation message', () => {
      const amount = '100';
      let fromVal = '';
      let toVal = '';
  
  
      cy.get('#amount').type(amount);
  
      // Salva account di origine
      cy.get('#fromAccountId').find('option').eq(0).then(($opt) => {
        fromVal = $opt.val();
        cy.get('#fromAccountId').select(fromVal);
      });
  
      // Salva account di destinazione
      cy.get('#toAccountId').find('option').eq(0).then(($opt) => {
        toVal = $opt.val();
        cy.get('#toAccountId').select(toVal);
      });
  
      // Invia il form
      cy.get('input[type="submit"]').click();
  
  
      cy.get('#amountResult').should('contain.text', `$${amount}.00`);
      cy.get('#fromAccountIdResult').should('contain.text', `${fromVal}`);
      cy.get('#toAccountIdResult').should('contain.text', `${toVal}`);
    });
  
  
    it('should not allow transfer if amount is missing', () => {
      // Lascia il campo importo vuoto
      cy.get('#amount').clear();
  
      // Seleziona account validi come prima
      cy.get('#fromAccountId')
        .find('option')
        .should('have.length.greaterThan', 0)
        .then(($fromOptions) => {
          const fromVal = $fromOptions.eq(0).val();
          cy.get('#fromAccountId').select(fromVal);
  
          cy.get('#toAccountId')
            .find('option')
            .should('have.length.greaterThan', 0)
            .then(($toOptions) => {
              const toVal = $toOptions.eq(0).val();
              cy.get('#toAccountId').select(toVal);
  
              // Prova a inviare il form senza importo
              cy.get('input[type="submit"]').click();
  
              // Controlla che NON appaia il messaggio di successo
              cy.get('#showError > .title').should('be.visible');
              cy.get('#showError > .error').should('contain.text', 'An internal error has occurred and has been logged.');
              cy.url().should('include', '/transfer.htm');
            });
        });
    });
  });
