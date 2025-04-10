# Cypress Test Automation Project

This repository demonstrates an example Cypress test automation project for end-to-end testing. The tests are designed to validate a demo application and simplify the setup process for users. 

The project integrates **Behavior-Driven Development (BDD)** with **Gherkin syntax** for test plan documentation and test script writing. Additionally, it includes a **GitHub Actions** workflow (`ci.yml`) to automatically run tests in Windows and Ubuntu environments each time a pull request is made.

## Table of Contents

1. [Requirements](#requirements)
2. [Setup](#setup)
    - [Unix/Linux/Mac](#unixlinuxmac)
    - [Windows](#windows)
3. [Running Tests](#running-tests)
4. [Continuous Integration](#continuous-integration)
5. [Project Structure](#project-structure)
6. [Test Plan and Gherkin Integration](#test-plan-and-gherkin-integration)
7. [Example Test](#example-test)
8. [Contact](#contact)

## Requirements

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

## Setup

You can set up this project using one of the following methods based on your operating system or preferences.

### Unix/Linux/Mac

Run the setup script:
```bash
./setup.sh
```

### Windows

Run the setup script:
```bash
setup.bat
```

### NPM Command

Alternatively, you can use the `npm run setup` command available in the `package.json` file:
```bash
npm run setup
```

## Running Tests

After completing the setup, you can run the tests with Cypress.

### Open Cypress GUI

To open the Cypress Test Runner:
```bash
npx cypress open
```

### Run Tests in Headless Mode

To run tests in headless mode:
```bash
npx cypress run
```

## Continuous Integration

This repository includes a GitHub Actions workflow to automate the testing process:

- The workflow file is located in `.github/workflows/ci.yml`.
- The workflow is triggered automatically with each pull request.
- Tests are executed on both **Windows** and **Ubuntu** to ensure cross-platform compatibility.

### Workflow Highlights:
1. **Install Dependencies:** Installs Node.js and project dependencies.
2. **Run Tests:** Executes Cypress tests in headless mode on both operating systems.

You can view the results of each test run in the **Actions** tab of the repository on GitHub.

## Project Structure

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

## Test Plan and Gherkin Integration

This project emphasizes **Behavior-Driven Development (BDD)** by incorporating Gherkin syntax in both the **test plan** and some **Cypress test scripts**.

### Test Plan

The `test-plan.md` file outlines the scope and scenarios to be tested using Gherkin's Given-When-Then syntax. This format ensures that test cases are:

- Easily understandable by both technical and non-technical stakeholders.
- Clearly aligned with the application's requirements.

### Gherkin in Test Scripts

Some test scripts in the `cypress/e2e/feature-based/` folder use Gherkin syntax, thanks to the **cypress-cucumber-preprocessor** library. This approach provides:

- **Readable and maintainable tests:** Gherkin allows for modular step definitions.
- **Real-world BDD usage:** Especially useful in collaborative environments with multiple roles (QA, developers, product owners).

Example Gherkin scenario for a login test:
```gherkin
Scenario: Successful login with valid credentials
  Given the user is on the login page at https://example.com/login
  When the user enters valid email and password
  And clicks the "Login" button
  Then the user should be redirected to the dashboard
```

Corresponding step definitions in Cypress automate these steps and validate the application's behavior.

## Example Test

This project includes a demo based on the "QA Automation Test Cypress - Homework" file, which covers the following objectives:

1. Create a **test plan** to define the scope and scenarios to be tested.
2. Develop **test scripts** using Cypress to validate the specified requirements.
3. Execute the tests and generate **test reports** to document the outcomes.
4. Demonstrate the use of **both Gherkin and direct Cypress scripts** to showcase versatility.

## Contact

Feel free to reach out for questions, suggestions, or contributions:

- **LinkedIn:** [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- **GitHub:** [Your GitHub Profile](https://github.com/your-username)

### Contributions

Contributions, issues, and feature requests are welcome! Please open a pull request or an issue to contribute.
