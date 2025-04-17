# Cypress Test Automation Project

This repository demonstrates an example Cypress test automation project for end-to-end testing of the website:  
https://parabank.parasoft.com/parabank/index.htm

The project integrates **Behavior-Driven Development (BDD)** with **Gherkin syntax** for test plan documentation.  
It also includes a **GitHub Actions** workflow (`ci.yml`) to automatically run tests on Windows and Ubuntu environments with every pull request.

## Table of Contents

1. [Requirements](#requirements)
2. [Setup](#setup)
    - [Unix/Linux/Mac](#unixlinuxmac)
    - [Windows](#windows)
3. [Running Tests](#running-tests)
4. [Continuous Integration](#continuous-integration)
5. [Project Structure](#project-structure)
6. [Test Plan](#test-plan)
7. [Example Test Scenarios](#example-test-scenarios)
8. [Contact](#contact)

## Requirements

Make sure the following tools are installed:

- [Node.js](https://nodejs.org/) (recommended version: 18.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

## Setup

You can set up this project using one of the following methods based on your operating system.

### Unix/Linux/Mac

```bash
./setup.sh
```

### Windows

```bash
setup.bat
```

### Alternative via npm

```bash
npm install
```

## Running Tests

Once setup is complete, you can run tests using Cypress.

### Open Cypress GUI

```bash
npx cypress open
```

### Headless Mode (CLI)

```bash
npx cypress run
```

## Continuous Integration

GitHub Actions workflow is located in:

```
.github/workflows/ci.yml
```

It triggers on each pull request and:

- Installs Node.js and dependencies
- Runs Cypress tests in headless mode
- Executes tests on both Windows and Ubuntu

Check the Actions tab in GitHub to see test results.

## Project Structure

```plaintext
Cypress-Test-Automation/
├── .github/workflows/       # GitHub Actions workflows
│   └── ci.yml
├── cypress/
│   ├── downloads/           # Files downloaded during tests
│   ├── e2e/
│   │   └── direct/
│   │       ├── billpay.cy.js
│   │       ├── loginFlow.cy.js
│   │       ├── openaccount.cy.js
│   │       └── transfer.cy.js
│   ├── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js        # Cypress configuration
├── package.json             # Project dependencies
├── package-lock.json        # Dependency lock file
├── setup.sh                 # Unix setup script
├── setup.bat                # Windows setup script
├── test-plan.md             # Gherkin-based test plan
└── README.md                # This file
```

## Test Plan

The `test-plan.md` file uses **Gherkin syntax** to outline BDD test scenarios using the `Given-When-Then` format. This ensures clarity and collaboration between technical and non-technical stakeholders.

Example:
```gherkin
Feature: Funds Transfer

  Scenario: Successful transfer between accounts
    Given the user is logged in
    When they transfer $100 from Account A to Account B
    Then the balance should update accordingly
```

## Example Test Scenarios

Located in `cypress/e2e/direct/`:

- `loginFlow.cy.js` — Tests login functionality
- `billpay.cy.js` — Tests bill payment process
- `openaccount.cy.js` — Tests new account creation
- `transfer.cy.js` — Tests fund transfer between accounts

## Contact

For questions, feedback or contributions:

- LinkedIn: [My LinkedIn Profile](https://www.linkedin.com/in/rita-iacono)
- GitHub: [My GitHub Profile](https://github.com/riacono91)

## Contributions

Contributions, issues, and feature requests are welcome.  
Feel free to open a pull request or an issue.
