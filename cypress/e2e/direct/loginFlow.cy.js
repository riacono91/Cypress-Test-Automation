// Login Flow

// Scenario: Invalid login attempt
// Given the user is on the "Actions" page  
// When the user clicks the login button with incorrect login credentials  
// Then an alert message should appear indicating that the login is invalid.

// describe('Login Flow Test', () => {
//     it('should show an alert for invalid login', () => {
//       cy.visit('https://example.cypress.io/commands/actions');
//       cy.get('.action-login').click(); // Example selector
//       cy.on('window:alert', (text) => {
//         expect(text).to.contains('Invalid login');
//       });
//     });
//   });
  
// describe('Student Registration Form - Positive Test Case', function () {

//     it('should submit the form with valid data', function () {
  
//       // Visit the form page
//       cy.visit('https://demoqa.com/automation-practice-form');
  
//       // Fill in the form with valid data
//       cy.get('#firstName').type('John');
//       cy.get('#lastName').type('Doe');
//       cy.get('#userEmail').type('john.doe@example.com');
//       cy.get('[name="gender"][value="Male"]').check();
//       cy.get('#userNumber').type('9876543210');
//       cy.get('#dateOfBirthInput').click();
//       cy.get('.react-datepicker__day--010').click(); // Select a date
//       cy.get('#subjectsInput').type('Math{enter}');
//       cy.get('[for="hobbies-checkbox-1"]').click(); // Check 'Sports' hobby
//     //   cy.get('#uploadPicture').attachFile('image.png'); // Attach a valid image
//       cy.get('#currentAddress').type('123 Main St, Anytown');
//       cy.get('#state').click();
//       cy.get('#stateCity-wrapper').contains('NCR').click();
//       cy.get('#city').click();
//       cy.get('#stateCity-wrapper').contains('Delhi').click();
  
//       // Submit the form
//       cy.get('#submit').click();
  
//       // Verify successful submission by checking for success message or confirmation
//       cy.get('.modal-title').should('contain', 'Thanks for submitting the form');
//     });
//   });

  
//   describe('Student Registration Form - Negative Test Case', function () {

//     it('should show an error for invalid email format', function () {
  
//       // Visit the form page
//       cy.visit('https://demoqa.com/automation-practice-form');
  
//       // Fill in the form with invalid email
//       cy.get('#firstName').type('John');
//       cy.get('#lastName').type('Doe');
//       cy.get('#userEmail').type('john.doe'); // Invalid email format
//       cy.get('[name="gender"][value="Male"]').check();
//       cy.get('#userNumber').type('9876543210');
//       cy.get('#dateOfBirthInput').click();
//       cy.get('.react-datepicker__day--010').click();
//       cy.get('#subjectsInput').type('Math{enter}');
//       cy.get('[for="hobbies-checkbox-1"]').click();
//     //   cy.get('#uploadPicture').attachFile('image.png');
//       cy.get('#currentAddress').type('123 Main St, Anytown');
//       cy.get('#state').click();
//       cy.get('#stateCity-wrapper').contains('NCR').click();
//       cy.get('#city').click();
//       cy.get('#stateCity-wrapper').contains('Delhi').click();
  
//       // Try to submit the form
//       cy.get('#submit').click();
  
//       // Verify that the email validation message appears
//       cy.get('#userEmail').then($email => {
//         expect($email[0].validationMessage).to.equal('Please include an “@” in the email address. “john.doe” is missing an “@”.');
//       });
//     });
//   });

//   describe('Student Registration Form - Mandatory Fields Highlighting', function () {

//     it('should highlight mandatory fields in red when Submit is clicked without filling out the form', function () {
  
//       // Visit the form page
//       cy.visit('https://demoqa.com/automation-practice-form');
  
//       // Click the submit button without filling in any fields
//       cy.get('#submit').click();
  
//       // Verify that mandatory fields are highlighted in red (or any error style)
      
//       // Check if the First Name field is red (error indication)
//       cy.get('#firstName')
//         .should('have.css', 'border-color')  // Check border color
//         .and('eq', 'rgb(255, 0, 0)');  // Red color (you may need to adjust this based on the form's styling)
  
//       // Check if the Last Name field is red (error indication)
//       cy.get('#lastName')
//         .should('have.css', 'border-color')
//         .and('eq', 'rgb(255, 0, 0)');
  
//       // Check if the Email field is red (error indication)
//       cy.get('#userEmail')
//         .should('have.css', 'border-color')
//         .and('eq', 'rgb(255, 0, 0)');
  
//       // Check if the Phone Number field is red (error indication)
//       cy.get('#userNumber')
//         .should('have.css', 'border-color')
//         .and('eq', 'rgb(255, 0, 0)');
  
//       // Check if the Gender field is red (error indication)
//       cy.get('[name="gender"]:radio')
//         .should('have.css', 'border-color')
//         .and('eq', 'rgb(255, 0, 0)');
  
//       // Check if the Date of Birth field is red (error indication)
//       cy.get('#dateOfBirthInput')
//         .should('have.css', 'border-color')
//         .and('eq', 'rgb(255, 0, 0)');
  
//       // If any other mandatory fields have specific styles, you can check them similarly.
//     });
//   });
  
// cypress/e2e/login.cy.js

describe('Parabank Login', () => {
  it('should login successfully with valid credentials', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    cy.get('input[name="username"]').type('john'); // Usa un utente valido
    cy.get('input[name="password"]').type('demo');
    cy.get('input[value="Log In"]').click();

    cy.contains('Accounts Overview').should('be.visible');
  });

  it('should show error with invalid credentials', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    cy.get('input[name="username"]').type('wronguser');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('input[value="Log In"]').click();

    cy.contains('An internal error has occurred and has been logged.').should('be.visible');
  });
});
