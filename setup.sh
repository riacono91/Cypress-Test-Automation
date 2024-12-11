#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Log the environment
echo "Node version:"
node --version
echo "NPM version:"
npm --version

# Install dependencies
echo "Installing dependencies..."
npm install

# Install Cypress binary
echo "Installing Cypress binary..."
npx cypress install

# Ensure Cypress binary is executable
echo "Setting permissions for Cypress binary..."
chmod +x ./node_modules/.bin/cypress

# Done
echo "Setup complete! You can now run Cypress with 'npx cypress run'."
