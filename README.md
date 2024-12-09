# **Cypress Test Automation Project**

An example Cypress test automation project for showcasing end-to-end testing. This project tests a demo application and includes scripts to simplify the setup process for any user.

---

## **Table of Contents**

1. [Requirements](#requirements)
2. [Setup Options](#setup-options)
    - [Unix/Linux/Mac Users](#unixlinuxmac-users)
    - [Windows Users](#windows-users)
    - [Node.js Users](#nodejs-users)
3. [Run Tests](#run-tests)
4. [Project Structure](#project-structure)
5. [Example Test](#example-test)
6. [Contact](#contact)

---

## **Requirements**

Before starting, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or above)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

---

## **Setup Options**

You can set up this project using one of the following methods based on your operating system or preferences.

### **Unix/Linux/Mac Users**
Run the `setup.sh` script:
```bash
./setup.sh
```

### **Windows Users**
Run the `setup.bat` file:
```bash
setup.bat
```

### **Node.js Users**
If you prefer a Node.js script, run:
```bash
node setup.js
```

### **NPM Command**
Alternatively, you can use the `npm run setup` command available in the `package.json` file:
```bash
npm run setup
```

---

## **Run Tests**

Once the setup is complete, you can execute the tests using Cypress:

### **Open Cypress GUI**
To open the Cypress Test Runner:
```bash
npx cypress open
```

### **Run Tests in Headless Mode**
To execute all tests in headless mode:
```bash
npx cypress run
```

---

## **Project Structure**

```plaintext
Cypress-Test-Automation/
├── cypress/                 # Cypress test files and configurations
│   ├── e2e/                 # End-to-end test specifications
│   ├── fixtures/            # Test data
│   ├── support/             # Custom commands and configurations
├── .gitignore               # Files and folders to ignore in version control
├── cypress.config.js        # Cypress configuration file
├── package.json             # NPM configuration and dependencies
├── README.md                # Project documentation
├── setup.sh                 # Setup script for Unix/Linux/Mac
├── setup.bat                # Setup script for Windows
├── setup.js                 # Setup script using Node.js
```

---

## **Example Test**

Here’s a sample test included in the project:

```javascript
describe('Example Test', () => {
  it('Visits the Cypress example page and verifies navigation', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
  });
});
```

---

## **Contact**

Feel free to reach out for questions, suggestions, or contributions:

- **LinkedIn:** [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- **GitHub:** [Your GitHub Profile](https://github.com/riacono91)

---

### **Contributions**
Contributions, issues, and feature requests are welcome! Please open a pull request or an issue to contribute.
