# **Cypress Test Automation Project**

An example Cypress test automation project for showcasing end-to-end testing. This project tests a demo application and includes scripts to simplify the setup process for any user.

Additionally, this repository includes a GitHub Actions workflow (`ci.yml`) that runs tests automatically on Windows and Ubuntu environments every time a pull request is made. The project also demonstrates the use of **Gherkin syntax** for Behavior-Driven Development (BDD) in both the test plan and some test scripts.

---

## **Table of Contents**

1. [Requirements](#requirements)
2. [Setup Options](#setup-options)
    - [Unix/Linux/Mac Users](#unixlinuxmac-users)
    - [Windows Users](#windows-users)
3. [Run Tests](#run-tests)
4. [Continuous Integration](#continuous-integration)
5. [Project Structure](#project-structure)
6. [Test Plan and Gherkin Integration](#test-plan-and-gherkin-integration)
7. [Example Test](#example-test)
8. [Contact](#contact)

---

## **Requirements**

Before starting, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16)
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

## **Continuous Integration**

This repository includes a GitHub Actions workflow to automate the testing process:

- The `ci.yml` file is located in the `.github/workflows/` directory.
- The workflow is triggered automatically every time a pull request is made.
- The tests run in both **Windows** and **Ubuntu** environments to ensure cross-platform compatibility.

### Workflow Highlights:
1. **Install Dependencies:** Installs Node.js and project dependencies.
2. **Run Tests:** Executes the Cypress tests in headless mode on both operating systems.

You can find the results of each test run in the **Actions** tab of the repository on GitHub.

---

## **Project Structure**

```plaintext
Cypress-Test-Automation/
├── cypress/                 # Cypress test files and configurations
│   ├── e2e/                 # End-to-end test specifications
│   │   ├── feature-based/   # Tests written with Gherkin syntax
│   │   └── direct/          # Tests written directly in Cypress
│   ├── fixtures/            # Test data
│   ├── support/             # Custom commands and configurations
├── .github/workflows/       # GitHub Actions workflows
│   └── ci.yml               # Workflow configuration for CI
├── .gitignore               # Files and folders to ignore in version control
├── cypress.config.js        # Cypress configuration file
├── package.json             # NPM configuration and dependencies
├── README.md                # Project documentation
├── setup.sh                 # Setup script for Unix/Linux/Mac
├── setup.bat                # Setup script for Windows
├── setup.js                 # Setup script using Node.js
├── test-plan.md             # Test plan written in Gherkin syntax
```

---

## **Test Plan and Gherkin Integration**

This project emphasizes **Behavior-Driven Development (BDD)** by incorporating Gherkin syntax in both the **test plan** and some of the **Cypress test scripts**.

### **Test Plan**
The `test-plan.md` file outlines the scope and scenarios to be tested using Gherkin's Given-When-Then syntax. This format ensures that test cases are:

- Easily understandable by both technical and non-technical stakeholders.
- Clearly aligned with the application's requirements.

### **Gherkin in Test Scripts**
Some test scripts in the `cypress/e2e/feature-based/` folder leverage Gherkin syntax with the help of the **cypress-cucumber-preprocessor** library. This demonstrates:

- **Readable and maintainable tests:** The Gherkin approach allows for modular step definitions.
- **Real-world usage of BDD tools:** Useful in collaborative environments where multiple roles (e.g., QA, developers, product owners) need to work together.

For example, a login test might look like this in Gherkin:
```gherkin
Scenario: Successful login with valid credentials
  Given the user is on the login page at https://example.com/login
  When the user enters valid email and password
  And clicks the "Login" button
  Then the user should be redirected to the dashboard
```

Corresponding step definitions in Cypress automate these steps to validate the application behavior.

---

## **Example Test**

The project includes a demo based on the file **QA Automation Test Cypress - Homework**, which outlines the following objectives:

1. Create a **test plan** to define the scope and scenarios to be tested.
2. Develop **test scripts** using Cypress to validate the specified requirements.
3. Execute the tests and generate **test reports** to document the outcomes.
4. Demonstrate the use of **both Gherkin and direct Cypress scripts** to showcase versatility.

---

## **Contact**

Feel free to reach out for questions, suggestions, or contributions:

- **LinkedIn:** [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- **GitHub:** [Your GitHub Profile](https://github.com/riacono91)

---

### **Contributions**
Contributions, issues, and feature requests are welcome! Please open a pull request or an issue to contribute.

