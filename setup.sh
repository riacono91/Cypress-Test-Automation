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

# Verify Cypress binary exists
if [ -d ~/.cache/Cypress ]; then
  echo "Cypress binary found."
else
  echo "Cypress binary missing! Exiting."
  exit 1
fi

# Done
echo "Setup complete! You can now run Cypress with 'npx cypress run'."
