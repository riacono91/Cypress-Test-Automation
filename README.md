# **Cypress Test Automation Project**

An example Cypress test automation project for showcasing end-to-end testing. This project tests a demo application and includes scripts to simplify the setup process for any user.

Additionally, this repository includes a GitHub Actions workflow (`ci.yml`) that runs tests automatically on Windows and Ubuntu environments every time a pull request is made.

---

## **Table of Contents**

1. [Requirements](#requirements)
2. [Setup Options](#setup-options)
    - [Unix/Linux/Mac Users](#unixlinuxmac-users)
    - [Windows Users](#windows-users)
3. [Run Tests](#run-tests)
4. [Continuous Integration](#continuous-integration)
5. [Project Structure](#project-structure)
6. [Example Test](#example-test)
7. [Contact](#contact)

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
```

---

## **Example Test**

The project includes a demo based on the file **QA Automation Test Cypress - Homework**, which outlines the following objectives:

1. Create a **test plan** to define the scope and scenarios to be tested.
2. Develop **test scripts** using Cypress to validate the specified requirements.
3. Execute the tests and generate **test reports** to document the outcomes.

This setup showcases how to efficiently plan, automate, and report on end-to-end testing for a demo application.

---

## **Contact**

Feel free to reach out for questions, suggestions, or contributions:

- **LinkedIn:** [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- **GitHub:** [Your GitHub Profile](https://github.com/riacono91)

---

### **Contributions**
Contributions, issues, and feature requests are welcome! Please open a pull request or an issue to contribute.
