@echo off
REM Stop execution if any command fails
setlocal enabledelayedexpansion

REM Log the environment
echo Node version:
node --version
echo NPM version:
npm --version

REM Install dependencies
echo Installing dependencies...
npm install || EXIT /B %ERRORLEVEL%

REM Install Cypress binary
echo Installing Cypress binary...
npx cypress install || EXIT /B %ERRORLEVEL%

REM Done!
echo Setup complete! You can now run Cypress with 'npx cypress run'.
