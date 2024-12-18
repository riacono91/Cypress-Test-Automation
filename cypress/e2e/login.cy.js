// cypress/e2e/login.cy.js
describe("User Login", () => {
    it("Successful login with valid credentials", () => {
      // Visit the login page
      cy.visit("https://ecommerce-site.com/login");
  
      // Enter valid email and password
      cy.get('#email').type("user@example.com"); // Replace with actual selector
      cy.get('#password').type("securePassword123"); // Replace with actual selector
  
      // Click the login button
      cy.contains('button', "Login").click();
  
      // Verify redirection to the dashboard or Home page
      cy.url().should('include', '/dashboard'); // Check if redirected URL is correct
      cy.contains("Home").should('be.visible'); // Verify "Home" page content
    });
  });
  