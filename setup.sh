#!/bin/bash

# Clone the repository
echo "Cloning the repository..."
git clone https://github.com/riacono91/Cypress-Test-Automation.git
cd Cypress-Test-Automation || exit

# Install dependencies
echo "Installing dependencies..."
npm install

# Done!
echo "Setup complete! You can now run Cypress with 'npx cypress open'."
