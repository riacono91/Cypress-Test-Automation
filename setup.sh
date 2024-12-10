#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Install dependencies
echo "Installing dependencies..."
npm install

# Ensure Cypress binary is executable
echo "Ensuring Cypress binary permissions..."
chmod +x ./node_modules/.bin/cypress

# Install Cypress binary
echo "Installing Cypress binary..."
npx cypress install

# Done
echo "Setup complete! You can now run Cypress with 'npx cypress run'."
