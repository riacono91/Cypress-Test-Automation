describe('Parabank Bill Pay', () => {

  const billPaymentData = {
    payeeName: 'Electric Company',
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    phoneNumber: '1234567890',
    accountNumber: '5551234',
    amount: '150'
  };

  beforeEach(() => {
    cy.login(); // Use the custom command to log in
    cy.visit('https://parabank.parasoft.com/parabank/billpay.htm'); // Navigate to the Bill Pay page
  });

  it('should submit the bill payment with valid data', () => {
    // Use a custom command to fill out the form
    cy.fillBillPaymentForm(billPaymentData);

    // Submit the payment
    cy.get('input[value="Send Payment"]').click();

    // Verify that the payment was completed
    cy.contains('Bill Payment Complete').should('be.visible');
  });
});

Cypress.Commands.add('fillBillPaymentForm', (data) => {
  cy.get('input[name="payee.name"]').type(data.payeeName); // Fill in the payee name
  cy.get('input[name="payee.address.street"]').type(data.street); // Fill in the street address
  cy.get('input[name="payee.address.city"]').type(data.city); // Fill in the city
  cy.get('input[name="payee.address.state"]').type(data.state); // Fill in the state
  cy.get('input[name="payee.address.zipCode"]').type(data.zipCode); // Fill in the zip code
  cy.get('input[name="payee.phoneNumber"]').type(data.phoneNumber); // Fill in the phone number
  cy.get('input[name="payee.accountNumber"]').type(data.accountNumber); // Fill in the account number
  cy.get('input[name="verifyAccount"]').type(data.accountNumber); // Verify the account number
  cy.get('input[name="amount"]').type(data.amount); // Fill in the payment amount
});
